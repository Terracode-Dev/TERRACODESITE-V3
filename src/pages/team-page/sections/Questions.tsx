import TerraButton from "@/components/button"
import React, { useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/components/toast';

interface FormData {
  firstName: string;
  email: string;
  message: string;
  agreeToTerms: boolean;
}

const Questions = () => {
  const { showToast } = useToast();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
     const [formData, setFormData] = useState<FormData>({
        firstName: '',
        email: '',
        message: '',
        agreeToTerms: false
      });

       const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

    const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
   if (!formRef.current) return;

    if (!formData.agreeToTerms) {
      alert("Please agree with Terms and Privacy Policy.");
      return;
    }

    setIsSubmitting(true); 

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      await emailjs.sendForm(
        String(serviceId),
        String(templateId),
        formRef.current,
        { publicKey: String(publicKey) }
      );

      showToast('Thank you! Your message has been sent successfully.', 'success');

      // Reset form
      setFormData({
        firstName: '',
        email: '',
        message: '',
        agreeToTerms: false
      });
    } catch (error) {
      console.error(error);
      showToast('Oops! Something went wrong. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false); // End loading state
    }
  };

  return (
    <div className="flex  justify-center container mx-auto font-lufga my-10 xl:my-20">
    <div className="md:w-2/3 mx-auto px-4 py-12">
    <div className="space-y-6">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FDA10A] font-light">Still Have Questions?</h2>
              <p className="text-[#A4A4A4] text-lg md:text-xl lg:text-2xl font-light">We're Here to Help.</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Email Row */}
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-4">
                  <label htmlFor="firstName" className="text-white text-xl font-medium">
                    Tell us your name

                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChanges}
                    placeholder="your name"
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f56d04] focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <label htmlFor="email" className="text-white text-xl font-medium">
                    
Where can we reach you?

                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChanges}
                    placeholder="your email or contact number"
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f56d04] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-4">
                <label htmlFor="message" className="text-white text-lg font-medium">
                  Tell us your idea and our team will reach out to you soon.

                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChanges}
                  placeholder="We’re listening , what’s on your mind?"
                  required
                  rows={8}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f56d04] focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex flex-col justify-start items-start lg:flex-row lg:items-center gap-3 lg:justify-between">
                <div className='flex flex-row items-center'>
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChanges}
                  required
                 className="sr-only" // Hide the actual checkbox but keep it accessible
                  />
                  <div 
                    className={`w-5 h-5 flex items-center justify-center border ${formData.agreeToTerms ? 'bg-[#FDA10A] border-[#FDA10A]' : 'bg-transparent border-gray-400'} rounded cursor-pointer`}
                    onClick={() => setFormData(prev => ({...prev, agreeToTerms: !prev.agreeToTerms}))}
                  >
                    {formData.agreeToTerms && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                <label htmlFor="agreeToTerms" className="text-gray-300 text-xl mx-2">
                  I agree with{' '}
                  <a href="/policies/terms-conditions.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-500">Terms &amp; Conditions</a>
                  {' '}and{' '}
                  <a href="/policies/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-500">Privacy Policy</a>
                </label>
                </div>
                 {/* Submit Button with loader */}
                <TerraButton 
                  type='submit' 
                  label={isSubmitting ? 'Sending...' : 'Submit'}
                  iconSrc={isSubmitting ? '' : '/button/Arrow.svg'}
                  isLoading={isSubmitting}
                />
              </div>
            </form>
          </div>
        </div>
        </div>
        
  )
}

export default Questions
