import { ScrollingEffect, type ScrollingEffectRef } from "@/components/scrollEffect";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Add this Star Rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-7 h-7 ${
            star <= rating ? 'text-[#FDA10A]' : 'text-gray-500'
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

export default function OurClients() {
  const scrollRef = useRef<ScrollingEffectRef>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (scrollRef.current) {
      const state = scrollRef.current.getScrollState();
      setCanScrollLeft(state.canScrollLeft);
      setCanScrollRight(state.canScrollRight);
    }
  };

  const handleScrollLeft = () => {
    scrollRef.current?.scrollLeft();
    setTimeout(updateScrollState, 300);
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollRight();
    setTimeout(updateScrollState, 300);
  };

  useEffect(() => {
    // Initial state check
    setTimeout(updateScrollState, 100);
  }, []);

  const clients =[
    {
      name:"Nomin",
      image: "employee/IMG_1158.PNG",
      position: "CEO",
      comment: "Terracode's team transformed our operations with their AI solutions. Their expertise is unmatched.",
      rate: 2
    },
    {
      name:"Nomin",
      image: "employee/IMG_1158.PNG",
      position: "CEO",
      comment: "Terracode's team transformed our operations with their AI solutions. Their expertise is unmatched.",
      rate: 5
    },
    {
      name:"Nomin",
      image: "employee/IMG_1158.PNG",
      position: "CEO",
      comment: "Terracode's team transformed our operations with their AI solutions. Their expertise is unmatched.",
      rate: 5
    },
    {
      name:"Nomin",
      image: "employee/IMG_1158.PNG",
      position: "CEO",
      comment: "Terracode's team transformed our operations with their AI solutions. Their expertise is unmatched.",
      rate: 5
    }
  ]

  return (
    <div>
    <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 font-lufga mt-10 xl:mt-20 ">
      <div className=" p-4 rounded flex flex-col justify-between ">
        <div className="flex flex-col">
            <h1 className="text-6xl font-extralight mb-4 text-[#FDA10A]">Our Client Success</h1>
            <p className="text-xl font-extralight text-neutral-400">Hear from businesses that have transformed their operations with our AI-driven solutions.</p>

        </div>
        <div className="flex flex-row items-center  mt-4 gap-4">
            <button 
              onClick={handleScrollLeft}
              disabled={!canScrollLeft}
              className="disabled:opacity-50  transition-opacity"
            >
                <div className="border-white border-2 hover:bg-white p-2 rounded-full text-orange-500 flex items-center gap-2">
                    <ArrowLeft/>
                </div>
            </button>
            <button 
              onClick={handleScrollRight}
              disabled={!canScrollRight}
              className="disabled:opacity-50  transition-opacity"
            >
                <div className="border-white border-2 hover:bg-white active:bg-white p-2 rounded-full text-orange-500 flex items-center gap-2">
                <ArrowRight/>
                </div>
            </button>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-row">
          <div className="font-lufga flex flex-row gap-4 overflow-hidden">
            <ScrollingEffect 
              ref={scrollRef}
              autoScroll={false}
              scrollSpeed={3000}
              showControls={false}
              gap={6}>
              <div className="flex flex-row gap-4 font-lufga">
                {clients.map((client, index) => (
                  <div key={index} className="group relative items-start justify-start p-6 min-w-[424px] h-[294px] rounded-3xl bg-[#212121] overflow-hidden">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="flex flex-row items-center justify-start gap-4 mb-4">
                          <img className="w-10 h-10 rounded-full object-cover" src={client.image} alt={client.name} />
                          <div className="flex flex-col items-start justify-start">
                            <h2 className="text-xl text-[#fda10a]">{client.name}</h2>
                            <p className="text-sm text-neutral-400">{client.position}</p>
                          </div>
                        </div>
                        {/* Comment */}
                        <div className="mb-4">
                          <p className="text-white text-base leading-relaxed">
                            "{client.comment}"
                          </p>
                        </div>
                      </div>
                      {/* Star Rating - This will be pushed to the bottom */}
                      <div className="flex ">
                        <StarRating rating={client.rate} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollingEffect>
          </div>
        </div>
      </div>
    </div>


    {/* {mobile view} */}

    <div className="lg:hidden grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 font-lufga mt-10 xl:mt-20 ">
      <div className=" p-4 rounded flex flex-col justify-between ">
        <div className="flex flex-col">
            <h1 className="text-6xl font-extralight mb-4 text-[#FDA10A]">Our Client Success</h1>
            <p className="text-xl font-extralight text-neutral-400">Hear from businesses that have transformed their operations with our AI-driven solutions.</p>

        </div>
       
      </div>
      <div className="col-span-2">
        <div className="flex flex-row">
          <div className="font-lufga flex flex-row gap-4 overflow-hidden">
            <ScrollingEffect 
              ref={scrollRef}
              autoScroll={false}
              scrollSpeed={3000}
              showControls={false}
              gap={6}>
              <div className="flex flex-row gap-4 font-lufga">
                {clients.map((client, index) => (
                  <div key={index} className="group relative items-start justify-start p-6 min-w-[300px] h-[250px] rounded-3xl bg-[#212121] overflow-hidden">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="flex flex-row items-center justify-start gap-4 mb-4">
                          <img className="w-10 h-10 rounded-full object-cover" src={client.image} alt={client.name} />
                          <div className="flex flex-col items-start justify-start">
                            <h2 className="text-xl text-[#fda10a]">{client.name}</h2>
                            <p className="text-sm text-neutral-400">{client.position}</p>
                          </div>
                        </div>
                        {/* Comment */}
                        <div className="mb-4">
                          <p className="text-white text-sm leading-relaxed">
                            "{client.comment}"
                          </p>
                        </div>
                      </div>
                      {/* Star Rating - This will be pushed to the bottom */}
                      <div className="flex ">
                        <StarRating rating={client.rate} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollingEffect>
          </div>
        </div>
         <div className="flex flex-row items-center  mt-4 gap-4">
            <button 
              onClick={handleScrollLeft}
              disabled={!canScrollLeft}
              className="disabled:opacity-50  transition-opacity"
            >
                <div className="border-white border-2 hover:bg-white p-2 rounded-full text-orange-500 flex items-center gap-2">
                    <ArrowLeft/>
                </div>
            </button>
            <button 
              onClick={handleScrollRight}
              disabled={!canScrollRight}
              className="disabled:opacity-50  transition-opacity"
            >
                <div className="border-white border-2 hover:bg-white active:bg-white p-2 rounded-full text-orange-500 flex items-center gap-2">
                <ArrowRight/>
                </div>
            </button>
        </div>
      </div>
    </div>
    </div>
  )
}
