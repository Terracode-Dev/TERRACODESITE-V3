import React, { useState, useEffect } from 'react';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { ArrowLeft, ChevronDown} from 'lucide-react';

interface PackageType {
  id: string;
  name: string;
  lkr_price: number;
  usd_price: number;
  description: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  country: string;
  phoneNumber: string;
  currency: string;
  note: string;
  items: string;
  discountCode: string;
  amount: string;
  agreeToTerms: boolean;
}

const packages: PackageType[] = [
  { id: 'starter', name: 'Starter', lkr_price: 299700, usd_price: 999, description: 'Perfect for small projects' },
  { id: 'professional', name: 'Professional', lkr_price: 749700, usd_price: 2499, description: 'For growing businesses' },
  { id: 'business', name: 'Business', lkr_price: 1499700, usd_price: 4999, description: 'Enterprise solutions' },
  { id: 'custom', name: 'Custom', lkr_price: 0, usd_price: 0, description: 'Tailored to your needs' }
];

const discountCodes: { [key: string]: number } = {
  'SAVE10': 10,
  'SAVE20': 20,
  'SAVE30': 30
};

const Payform = () => {
  const navigate = useNavigate();
  const searchParams = useSearch({ strict: false }) as any;
  const [showPackageDropdown, setShowPackageDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    country: '',
    phoneNumber: '',
    currency: 'LKR', // Default currency
    note: '',
    items: '',
    discountCode: '',
    amount: '',
    agreeToTerms: false
  });

  // Populate form with search params when coming back from details page
  useEffect(() => {
    if (searchParams && Object.keys(searchParams).length > 0) {
      setFormData({
        firstName: searchParams.firstName || '',
        lastName: searchParams.lastName || '',
        companyName: searchParams.companyName || '',
        email: searchParams.email || '',
        country: searchParams.country || '',
        phoneNumber: searchParams.phoneNumber || '',
        currency: searchParams.currency || 'LKR',
        note: searchParams.note || '',
        items: searchParams.items || '',
        discountCode: searchParams.discountCode || '',
        amount: searchParams.amount || '',
        agreeToTerms: searchParams.agreeToTerms === 'true' || false
      });
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handlePackageSelect = (packageId: string) => {
    const selectedPkg = packages.find(p => p.id === packageId);
    const price = formData.currency === 'LKR' ? selectedPkg?.lkr_price : selectedPkg?.usd_price;
    setFormData(prev => ({
      ...prev,
      items: packageId,
      amount: packageId === 'custom' ? prev.amount : String(price || 0)
    }));
    setShowPackageDropdown(false);
  };

  const handleCurrencyChange = (currency: string) => {
    setFormData(prev => {
      const updatedData = { ...prev, currency };
      
      // Update amount based on selected package and new currency
      if (prev.items && prev.items !== 'custom') {
        const selectedPkg = packages.find(p => p.id === prev.items);
        const price = currency === 'LKR' ? selectedPkg?.lkr_price : selectedPkg?.usd_price;
        updatedData.amount = String(price || 0);
      }
      
      return updatedData;
    });
    setShowCurrencyDropdown(false);
  };

  const calculateTotal = () => {
    if (!formData.items) return 0;
    
    const selectedPkg = packages.find(p => p.id === formData.items);
    const basePrice = formData.currency === 'LKR' ? selectedPkg?.lkr_price : selectedPkg?.usd_price;
    
    let total = formData.items === 'custom' 
      ? Number(formData.amount) || 0 
      : basePrice || 0;

    if (formData.discountCode && discountCodes[formData.discountCode.toUpperCase()]) {
      const discount = discountCodes[formData.discountCode.toUpperCase()];
      total = total - (total * discount / 100);
    }

    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      alert('Please agree with Terms and Privacy Policy.');
      return;
    }

    const queryParams = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      companyName: formData.companyName,
      email: formData.email,
      country: formData.country,
      phoneNumber: formData.phoneNumber,
      currency: formData.currency,
      note: formData.note,
      items: formData.items,
      discountCode: formData.discountCode,
      amount: String(calculateTotal()),
      agreeToTerms: String(formData.agreeToTerms)
    });

    navigate({ to: '/payments-details' as any, search: Object.fromEntries(queryParams) as any });
  };

  const selectedPackageData = packages.find(p => p.id === formData.items);

  return (
    <div className="bg-black text-white font-lufga min-h-screen py-10  px-4 md:px-4 mb-32 ">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <button
            onClick={() => navigate({ to: '/' })}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extralight mb-4 text-[#FDA10A]">
            Complete Your Order
          </h1>
          <p className="text-xl text-gray-300">Fill in your details to proceed with payment</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="firstName" className="text-white text-lg font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Your first name"
                required
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDA10A] focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="lastName" className="text-white text-lg font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Your last name"
                required
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDA10A] focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

           {/* details Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-white text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                required
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDA10A] focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="phoneNumber" className="text-white text-lg font-medium">
               Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Your phone number"
                required
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDA10A] focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Company Name */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="companyName" className="text-white text-lg font-medium">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Your company name"
              required
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDA10A] focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Note */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="note" className="text-white text-lg font-medium">
              Note
            </label>
            <textarea
              id="note"
              name="note"
              value={formData.note}
              onChange={handleInputChange}
              placeholder="We are listening, what's on your mind?"
              rows={6}
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDA10A] focus:border-transparent transition-all duration-300 resize-none"
            />
          </div>

          {/* Package Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Package Dropdown */}
            <div className="flex flex-col space-y-2 relative">
              <label htmlFor="package" className="text-white text-lg font-medium">
                Select Package
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowPackageDropdown(!showPackageDropdown)}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white text-left focus:outline-none focus:ring-2 focus:ring-[#FDA10A] focus:border-transparent transition-all duration-300 flex items-center justify-between"
                >
                  <span className={selectedPackageData ? 'text-white' : 'text-gray-400'}>
                    {selectedPackageData ? selectedPackageData.name : 'Please select your package'}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${showPackageDropdown ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {showPackageDropdown && (
                  <div className="absolute z-10 w-full mt-2 bg-neutral-800 border border-neutral-700 rounded-xl shadow-lg overflow-hidden">
                    {packages.map((pkg) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => handlePackageSelect(pkg.id)}
                        className="w-full px-4 py-3 text-left hover:bg-neutral-700 transition-colors duration-200 border-b border-neutral-700 last:border-b-0"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-white font-medium">{pkg.name}</div>
                            <div className="text-gray-400 text-sm">{pkg.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Total Price with Currency Selector */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="totalPrice" className="text-white text-lg font-medium">
                Total Price
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  id="totalPrice"
                  name="totalPrice"
                  value={formData.items === 'custom' ? formData.amount : calculateTotal()}
                  onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                  placeholder="Total amount"
                  readOnly={formData.items !== 'custom'}
                  className={`flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDA10A] focus:border-transparent transition-all duration-300 ${
                    formData.items !== 'custom' ? 'cursor-not-allowed opacity-75' : ''
                  }`}
                />
                
                {/* Currency Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                    className="h-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#FDA10A] focus:border-transparent transition-all duration-300 flex items-center gap-2 min-w-[100px]"
                  >
                    <span className="font-medium">{formData.currency}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${showCurrencyDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {showCurrencyDropdown && (
                    <div className="absolute z-10 right-0 mt-2 w-full bg-neutral-800 border border-neutral-700 rounded-xl shadow-lg overflow-hidden">
                      <button
                        type="button"
                        onClick={() => handleCurrencyChange('LKR')}
                        className={`w-full px-4 py-2 text-left hover:bg-neutral-700 transition-colors duration-200 ${
                          formData.currency === 'LKR' ? 'bg-neutral-700' : ''
                        }`}
                      >
                        <div className="text-white font-medium">LKR</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCurrencyChange('USD')}
                        className={`w-full px-4 py-2 text-left hover:bg-neutral-700 transition-colors duration-200 ${
                          formData.currency === 'USD' ? 'bg-neutral-700' : ''
                        }`}
                      >
                        <div className="text-white font-medium">USD</div>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {formData.discountCode && discountCodes[formData.discountCode.toUpperCase()] && formData.items !== 'custom' && (
                <div className="text-sm text-gray-400">
                  Original: {formData.currency} {formData.currency === 'LKR' ? (packages.find(p => p.id === formData.items)?.lkr_price || 0).toLocaleString() : (packages.find(p => p.id === formData.items)?.usd_price || 0).toLocaleString()} - 
                  Discount: {discountCodes[formData.discountCode.toUpperCase()]}% = 
                  <span className="text-[#FDA10A] font-semibold"> {formData.currency} {calculateTotal().toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>

          {/* Terms and Submit */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 flex items-center justify-center border ${
                  formData.agreeToTerms ? 'bg-[#FDA10A] border-[#FDA10A]' : 'bg-transparent border-gray-400'
                } rounded cursor-pointer`}
                onClick={() => setFormData(prev => ({ ...prev, agreeToTerms: !prev.agreeToTerms }))}
              >
                {formData.agreeToTerms && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <label htmlFor="agreeToTerms" className="text-gray-300 text-lg ml-2 cursor-pointer">
                  I agree with{' '}
                  <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-500">Terms &amp; Conditions</a>
                  {' '}and{' '}
                  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-500">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-4 w-full lg:w-1/3 mt-auto py-3 rounded-3xl border-2 border-orange-500
             hover:border-white text-orange-400 hover:bg-gradient-to-r from-[#f56d04] to-[#fb9709]
              hover:text-white transition-all font-extrabold duration-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Proceed
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            By proceeding with this payment, you acknowledge and agree to our{' '}
            <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-500">Terms &amp; Conditions</a>,{' '}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-500">Privacy Policy</a>, and{' '}
            <a href="/refund-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-500">Refund Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Payform;
