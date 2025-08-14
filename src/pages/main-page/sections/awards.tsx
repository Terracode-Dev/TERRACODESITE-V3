import { ScrollingEffect, type ScrollingEffectRef } from "@/components/scrollEffect";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Awards() {
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

  const awards = [
    {
      id: 1,
      title: "Best Research",
      date: "January 2025",
      image: "/mainawards/image 33.png"
    },
    {
      id: 2,
      title: "Innovation Award",
      date: "March 2024",
      image: "/mainawards/image 33.png"
    },
    {
      id: 3,
      title: "Excellence in Technology",
      date: "June 2023",
      image: "/mainawards/image 33.png"
    },
    {
      id: 3,
      title: "Excellence in Technology",
      date: "June 2023",
      image: "/mainawards/image 33.png"
    },
    {
      id: 3,
      title: "Excellence in Technology",
      date: "June 2023",
      image: "/mainawards/image 33.png"
    }
  ];

  return (
    <div>
    <div className="hidden lg:grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 font-lufga mt-10 xl:mt-20 font-lufga ">
      <div className=" p-4 rounded flex flex-col justify-between">
        <div className="flex flex-col">
            <h1 className="text-5xl font-extralight mb-4 text-[#FDA10A]">Awards</h1>
            <p className="text-xl font-extralight text-neutral-400">We’re committed to excellence - and we’ve got the credentials to prove it.</p>

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
      <div className="  col-span-2">
        <div className="flex flex-row">
            <div className="font-lufga flex flex-row  gap-4  overflow-hidden">
            <ScrollingEffect 
              ref={scrollRef}
              autoScroll={false}
              scrollSpeed={300}
              showControls={false}
               pauseOnHover={true}
              gap={6}>
            <div className="flex flex-row gap-4">
                {awards.map((award) => (
                    <div key={award.id} className="group relative items-center justify-center min-w-[424px] h-[294px] rounded-3xl overflow-hidden">
                        <div className="w-full h-full">
                            <img className="h-full w-full object-cover" alt={award.title} src={award.image} />
                        </div>
                        <div className="absolute inset-0 p-4 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col items-start justify-end p-4 gap-3">
                            <h1 className="text-3xl font-extralight text-white">{award.title}</h1>
                            <div className="rounded-[56px] bg-white flex flex-row items-center justify-center py-1 px-4 gap-4 text-center text-base text-gray">
                                <div className="w-[15px] relative rounded-[50%] bg-orange-600 h-[15px]" />
                                <div className="relative tracking-[0.04px] leading-[30px] text-slate-400">Issued: {award.date}</div>
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

    <div className=" lg:hidden grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 font-lufga mt-10 xl:mt-20 font-lufga ">
      <div className=" p-4 rounded flex flex-col justify-between">
        <div className="flex flex-col">
            <h1 className="text-5xl font-extralight mb-4 text-[#FDA10A]">Awards</h1>
            <p className="text-xl font-extralight text-neutral-400">We’re committed to excellence - and we’ve got the credentials to prove it.</p>

        </div>
        
      </div>
      <div className="  col-span-2">
        <div className="flex flex-row">
            <div className="font-lufga flex flex-row  gap-4  overflow-hidden">
            <ScrollingEffect 
              ref={scrollRef}
              autoScroll={false}
              scrollSpeed={300}
              showControls={false}
               pauseOnHover={true}
              gap={6}>
            <div className="flex flex-row gap-4">
                {awards.map((award) => (
                    <div key={award.id} className="group relative items-center justify-center min-w-[300px] h-[250px] rounded-3xl overflow-hidden">
                        <div className="w-full h-full">
                            <img className="h-full w-full object-cover" alt={award.title} src={award.image} />
                        </div>
                        <div className="absolute inset-0 p-4 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col items-start justify-end p-4 gap-3">
                            <h1 className="text-2xl font-extralight text-white">{award.title}</h1>
                            <div className="rounded-[56px] bg-white flex flex-row items-center justify-center py-1 px-4 gap-4 text-center text-sm text-gray">
                                <div className="w-[10px] relative rounded-[50%] bg-orange-600 h-[10px]" />
                                <div className="relative tracking-[0.04px] leading-[30px] text-slate-400">Issued: {award.date}</div>
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
