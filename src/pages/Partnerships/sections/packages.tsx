import React, { useState, useMemo, useEffect } from "react";
import PartPopup from "./Part-popup";

interface PartnershipsPricingPlan {
  title: string;
  className: string;
  className2?: string;
  subtitle: string;
  originalPriceLKR?: string; 
  priceLKR: string;
  originalPriceUSD?: string; 
  priceUSD: string;
  per: string;
  features: string[];
  category: "Monthly" | "Annually";
}

const PartnershipspricingPlans: PartnershipsPricingPlan[] = [
  {
    title: "Founder Growth Partnership",
    subtitle: "Built for startup founders and early-stage businesses",
    originalPriceLKR: "",
    priceLKR: "Custom Pricing",
    originalPriceUSD: "",
    priceUSD: "Custom Pricing",
    per: "/ month",
    features: [
      "Full digital ecosystem planning and deployment tailored to your business stage",
      "Dedicated support across software, hardware, AI, and cybersecurity",
      "Business analysis and solution design (no technical planning needed from you)",
      "Startup-friendly model to reduce upfront technology costs",
      "Continuous guidance and structured tech support for scaling",
    ],
    category: "Monthly",
    className: "bg-gray-400",
  },
  {
    title: "Gold Partnership",
    subtitle: "Ideal for scaling businesses",
    originalPriceLKR: "129,000 LKR",
    priceLKR: "89,000 LKR",
    originalPriceUSD: "$1199",
    priceUSD: "$899",
    per: "/ month",
    features: [
      "Everything in Founder Growth Partnership",
      "Full digital ecosystem planning and deployment",
      "Integration of proprietary security solutions",
      "Access to in-house research products and devices",
      "Stronger implementation capacity for scaling operations",
      "Ongoing optimization and upgrade support",
    ],
    category: "Monthly",
    className: "bg-yellow-500",
    className2: "border border-orange-400 scale-105",
  },
  {
    title: "Elite Partnership",
    subtitle: "Built for enterprises and large-scale businesses",
    originalPriceLKR: "250,000 LKR",
    priceLKR: "180,000 LKR",
    originalPriceUSD: "$1599",
    priceUSD: "$1299",
    per: "/ month",
    features: [
      "Everything in Gold Partnership",
      "Enterprise-level digital ecosystem planning and deployment",
      "Advanced infrastructure design for large-scale environments",
      "Access to in-house research products",
      "Full business system re-engineering",
      "Long-term strategic technology partnership",
    ],
    category: "Monthly",
    className: "bg-sky-500",
  },
];

const PartnershipsSection: React.FC = () => {
  const [selectedCategory, _setSelectedCategory] = useState<"Monthly" | "Annually">("Monthly");
  const [selectedProject, setSelectedProject] = useState<PartnershipsPricingPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [currency, setCurrency] = useState<"USD" | "LKR">("USD");
  const [locationPermission, setLocationPermission] = useState<"prompt" | "granted" | "denied">("prompt");

  useEffect(() => {
    const fetchLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            setLocationPermission("granted");
            const { latitude, longitude } = position.coords;

            try {
              const res = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
              );
              const data = await res.json();
              const country = data.countryCode;

              if (country === "LK") {
                setCurrency("LKR");
              } else {
                setCurrency("USD");
              }
            } catch (error) {
              console.error("Error fetching location", error);
              setCurrency("USD");
            }
          },
          (error) => {
            console.error("Geolocation error:", error);
            setLocationPermission("denied");
            setCurrency("USD");
          }
        );
      } else {
        setLocationPermission("denied");
        setCurrency("USD");
      }
    };

    fetchLocation();
  }, []);

  const filteredPlans = useMemo(() => {
    return PartnershipspricingPlans.filter((plan) => plan.category === selectedCategory);
  }, [selectedCategory]);

  const handleProjectClick = (project: PartnershipsPricingPlan) => {
      setSelectedProject(project);
      setIsModalOpen(true);
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
  };

  return (
    <>
    <div className="container mx-auto bg-black flex flex-col items-center justify-center px-6  font-lufga  gap-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
      {/* Heading */}
        <h1 className="mt-10 text-3xl md:text-5xl lg:text-6xl font-light text-[#FDA10A] leading-tight mb-6">
          Choose the <span className="text-[#FDA10A] font-bol">One</span> {" "}
          <span className="block">
            
            <span className="text-white font-bold">Best fits your</span> <span className="text-white font-bold">Scale</span>
          </span>
        </h1>
      </div>
      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3  gap-8 w-full max-w-7xl ">
        
        {filteredPlans.map((plan, index) => (
          <div
            key={index}
            className={`${plan.className2 || ""} bg-gradient-to-b from-neutral-800 to-neutral-950 text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between`}
          >
            {/* Circle Icon */}
            <div className="flex items-center justify-center w-6 h-6 border-2 border-gray-400 rounded-full mb-4">
              <div className={`w-4 h-3 bg-gray-400 rounded-full m-1 ${plan.className}`}></div>
            </div>

            {/* Header */}
            <h3 className="text-xl font-semibold">{plan.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{plan.subtitle}</p>
            <h2 className="text-2xl font-semibold flex flex-col gap-1">
            {plan.title === "Founder Growth Partnership" ? (
              <span className="text-white text-2xl font-bold">
                Special growth-friendly pricing
              </span>
            ) : (
              <>
                {/* Original price (cut) */}
                {(currency === "LKR" ? plan.originalPriceLKR : plan.originalPriceUSD) && (
                  <span className="text-sm text-gray-500 line-through">
                    {currency === "LKR" ? plan.originalPriceLKR : plan.originalPriceUSD}
                  </span>
                )}

                {/* Discounted price */}
                <span className="text-white text-2xl font-bold">
                  {currency === "LKR" ? plan.priceLKR : plan.priceUSD}
                  <span className="text-sm font-normal text-gray-400 ml-1">
                    {plan.per}
                  </span>
                </span>
              </>
            )}
          </h2>
            <hr className="my-6 border-gray-700" />

            {/* Features */}
            <h4 className="mb-3 font-semibold">What you will get</h4>
            <ul className="space-y-2 text-gray-300 text-sm mb-6">
              {plan.features.map((feature, i) => (
               <li key={i} className="flex gap-3 items-start">
                  <span className="w-2.5 h-2.5 mt-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                  <span className="text-sm leading-6">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-auto py-3 rounded-3xl border-2 border-orange-500
             hover:border-white text-orange-400 hover:bg-gradient-to-r from-[#f56d04] to-[#fb9709]
              hover:text-white transition-all font-extrabold duration-700 cursor-pointer"
              
              onClick={() => handleProjectClick(plan)}
            >
              Inquire Now
            </button>
          </div>
        ))}
      </div>
      {/* Location Status Message */}
      <div className="mt-12 w-full max-w-5xl flex justify-center mb-14">
        <div className="px-5 py-3 rounded-2xl bg-neutral-900/40 border border-neutral-800 text-gray-400 text-xs md:text-sm flex items-center gap-4 transition-opacity duration-500 max-w-2xl text-center">
          <span className={`flex h-2 w-2 rounded-full shrink-0 ${locationPermission === 'granted' ? 'bg-green-500/70' : 'bg-orange-500/50'}`}></span>
          <p>
            {locationPermission === "granted"
              ? `Location-aware pricing enabled. Currently viewing rates in ${currency}.`
              : "Location access not allowed. Prices are displayed in USD by default. Please allow access for accurate regional pricing."}
          </p>
        </div>
      </div>
    </div>

     {/* Project Modal */}
            <PartPopup
                project={selectedProject as any}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                defaultPackage={selectedProject?.title}
            />

    </>
    
  );
};

export default PartnershipsSection;
