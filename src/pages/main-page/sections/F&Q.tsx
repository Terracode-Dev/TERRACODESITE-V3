import React, { useState, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import TerraButton from '@/components/button';
import emailjs from '@emailjs/browser';
import { useToast } from '@/components/toast';

interface Section {
  id: string;
  title: string;
  content: string;
}

interface FormData {
  firstName: string;
  email: string;
  message: string;
  agreeToTerms: boolean;
}

const FandQ = () => {
  const { showToast } = useToast();
  const formRef = useRef<HTMLFormElement | null>(null);
  const expandedRef = useRef<HTMLDivElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    message: '',
    agreeToTerms: false
  });

  const sections: Section[] = [
    {
      id: 'services',
      title: 'What services do you offer?',
      content: 'We offer comprehensive software development services including web applications, mobile apps, AI integration, cloud solutions, and digital transformation consulting tailored to your business needs.'
    },
    {
      id: 'timeline',
      title: 'How long does a typical project take?',
      content: 'Project timelines vary based on complexity and scope. while complex enterprise solutions can take 3-6 months. We provide detailed timelines during our initial consultation.'
    },
    {
      id: 'pricing',
      title: 'What is your pricing model?',
      content: 'We offer flexible pricing models including fixed-price projects, hourly rates. Our pricing is transparent and based on project scope, complexity, and timeline requirements.'
    },
    {
      id: 'support',
      title: 'Do you provide ongoing support?',
      content: 'Yes, we provide comprehensive ongoing support including maintenance and feature enhancements. We offer various support packages to meet your specific needs and budget.'
    },
    {
      id: 'communication',
      title: 'How do you handle project communication?',
      content: 'We maintain transparent communication through regular check-ins and dedicated project management tools. You\'ll have direct access to your project team and real-time updates.'
    }
  ];

  const handleMouseEnter = (sectionId: string): void => {
    setExpandedSection(sectionId);
  };

  const handleMouseLeave = (): void => {
    setExpandedSection(null);
  };

  const handleSectionClick = (sectionId: string): void => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <div className="px-4 md:px-4 bg-black text-white py-4 font-lufga my-10 xl:my-20 container mx-auto">
      <div className="max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - FAQ */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FDA10A] font-light">FAQ</h2>
              <p className="text-[#A4A4A4] text-lg md:text-xl lg:text-2xl font-light">Didn't find the answer you were looking for?</p>
            </div>
            
            <div className="flex flex-col space-y-3 lg:space-y-4">
              {sections.map((section) => (
                <div 
                  key={section.id}
                  className="relative"
                  ref={expandedSection === section.id ? expandedRef : null}
                  onMouseEnter={() => handleMouseEnter(section.id)}  
                  onMouseLeave={handleMouseLeave}    
                >
                  <div 
                    className={`bg-neutral-900 rounded-2xl lg:rounded-3xl transition-all duration-700 cursor-pointer border-2 relative overflow-hidden group ${
                      expandedSection === section.id 
                         ? 'border-transparent pb-6 animate-bounce-gentle ' 
                    : 'border-transparent'
                    }`}
                    onClick={() => handleSectionClick(section.id)}
                  >
                    {/* Top gradient line on hover */}
                    <div className="absolute top-0 left-0 w-full h-[1.5px] opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />
                    
                    {/* Bottom gradient line on hover */}
                    <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />
                    <div className="flex items-center justify-between px-4 lg:px-6 py-4 lg:py-6">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-[#f56d04] h-3 w-3 lg:h-4 lg:w-4 flex-shrink-0"></div>
                        <p className="text-lg md:text-xl lg:text-2xl font-light">
                          {section.title}
                        </p>
                      </div>
                      <ChevronRight 
                        className={`w-5 h-5 lg:w-6 lg:h-6 text-[#F56D04] transition-all duration-700 flex-shrink-0 ${
                          expandedSection === section.id ? 'rotate-90 scale-110' : 'hover:scale-110'
                        }`}
                      />
                    </div>
                    
                    {/* Expandable Content */}
                    <div 
                      className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                        expandedSection === section.id 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className={`px-4 lg:px-6 pb-4 transition-all duration-1000 ${
                        expandedSection === section.id ? 'transform translate-y-0' : 'transform -translate-y-4'
                      }`}>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed ml-6">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-6">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FDA10A] font-light">Still Have Questions?</h2>
              <p className="text-[#A4A4A4] text-lg md:text-xl lg:text-2xl font-light">We're Here to Help.</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-4">
                  <label htmlFor="firstName" className="text-white text-xl font-medium">
                    Tell us your name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputsChange}
                    placeholder="Enter First Name"
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
                    onChange={handleInputsChange}
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
                  onChange={handleInputsChange}
                  placeholder="We’re listening , what’s on your mind?"
                  required
                  rows={8}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f56d04] focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

               {/* Terms Checkbox */}
              <div className="flex flex-col justify-start items-start md:flex-row md:items-center gap-3 md:justify-between">
                <div className='flex flex-row items-center'>
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputsChange}
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
                {/* Submit Button */}
                
              {/* <button
                type="submit"
                disabled={!formData.agreeToTerms}
                className="flex w-1/3 items-center justify-between bg-amber-600 rounded-4xl p-6 text-2xl "
              >
                Submit
                <Send className="w-5 h-5" />
              </button> */}
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

      <style>{`
        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          25% {
            transform: translateY(-8px);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
          50% {
            transform: translateY(-4px);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          75% {
            transform: translateY(-2px);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default FandQ;
