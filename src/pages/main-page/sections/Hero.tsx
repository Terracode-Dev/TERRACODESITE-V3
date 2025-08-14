import TerraButton from "@/components/button";
import Navbar from "@/components/navbar";
import { ScrollingEffect,  type ScrollingEffectRef } from "@/components/scrollEffect";
import { Link,  useNavigate } from "@tanstack/react-router";
import { ArrowRightCircle, Heart,  LucideLightbulb, Rocket, Send } from "lucide-react";
import React, { useRef, useEffect } from "react";

const stack = [
  {
    name: "Item 1",
    image: "/logo/react.svg"
  },
  {
    name: "Item 2",
    image: "/logo/next.svg"
  },
  {
    name: "Item 3",
    image: "/logo/node.svg"
  },
  // {
  //   name: "Item 3",
  //   image: "/logo/java.svg"
  // },
  {
    name: "Item 3",
    image: "/logo/tailwind.svg"
  },
  {
    name: "Item 3",
    image: "/logo/aws.svg"
  },
  {
    name: "Item 3",
    image: "/logo/go.png"
  },
  {
    name: "Item 4",
    image: "/logo/flutter.svg"
  }
]

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollRef = useRef<ScrollingEffectRef>(null);
  const navigate =useNavigate();

  const handleClick = () => {
  navigate({ to: '/contact' }) // e.g., '/about', '/dashboard', etc.
}

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadstart', () => console.log('Video load started'));
      video.addEventListener('canplay', () => console.log('Video can play'));
      video.addEventListener('error', (e) => console.error('Video error:', e));
      
      // Force play after component mounts
      video.play().catch(console.error);
    }
  }, []);


  return (
    
    <div className="relative   overflow-hidden font-lufga  ">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onError={(e) => console.error('Video failed to load:', e)}
        onCanPlay={(e) => {
                console.log('Video ready to play');
                e.currentTarget.playbackRate = 0.4; // 75% speed
            }}
      >
        <source src="hero/Hero.mp4" type="video/mp4" />
        <source src="hero/Hero.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 z-10" />
      <div className="relative inset-0  z-30  mt-5 lg:mt-10 xl:container mx-auto">
       <Navbar/> 
       </div>
      {/* Content */}
      <div className="hidden relative z-20 lg:grid grid-cols-4 gap-4 items-center justify-center mt-5 xl:px-4 py-8 xl:container mx-auto px-4">
        <div className="col-span-1 flex flex-col justify-start items-start gap-4">
            <div className="relative max-w-md w-full text-white">
              <div className="backdrop-blur-md bg-white/10 rounded-full p-6 shadow-lg flex justify-center items-center flex-row overflow-hidden relative">
                {/* Gradient line inside this rounded box */}
                <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />
                
                <LucideLightbulb className="w-6 h-6 xl:w-10 xl:h-10 text-[#FDA10A] mr-4" />
                <h1 className="text-lg xl:text-2xl text-nowrap">Build Your Ideas!</h1>
              </div>
            </div>
            <Link to="/articles" className="text-white">
            <div className=" backdrop-blur-sm bg-white/10  rounded-2xl p-8 max-w-md w-full text-white shadow-lg">
                <h1 className="text-3xl  mb-4">Latest Articles & News</h1>
                <img className="object-cover w-full h-full mb-4 rounded-md" src="article/Mask group (1).png" alt="Vector" />
                <h1 className="text-lg">
                    Fueled by Passion. Built for Impact.
                </h1>
                <p className="text-sm text-neutral-400">
                    12 June 2025
                </p>
                <div className="flex flex-row gap-4">
                    <div className="backdrop-blur-sm bg-white/10 rounded-full px-3 py-1 mt-4 flex items-center gap-4">
                       <Send className="w-4 h-4"/> 10
                    </div>
                    <div className="backdrop-blur-sm bg-white/10 rounded-full px-3 py-1 mt-4 flex items-center gap-4">
                       <Heart className="w-4 h-4"/> 10
                    </div>
                </div>

            </div>
            </Link>
        </div>
        <div className="col-span-2 flex flex-col  gap-4 lg:px-10 xl:px-28">
            <div className=" backdrop-blur-md bg-white/10  rounded-full lg:p-4 lg:w-fit xl:p-6 max-w-md xl:w-full text-white shadow-lg flex justify-center items-center flex-row">
                <Rocket className="xl:w-10 xl:h-10 text-[#FDA10A] mr-4" />
                <h1 className="xl:text-2xl text-nowrap ">AI-first digital experiences.</h1>
            </div>
            <div className="flex flex-col   mt-8">
                <h1 className="lg:text-5xl xl:text-6xl font-extralight mb-4 text-[#FDA10A]">Future-Proof<br /> Software.<br /> Built for Impact.</h1>
                <p className="text-lg text-gray-400">We craft scalable, user-driven digital solutions that empower startups and enterprises to move faster, smarter, and better.</p>
                {/* <button
                
                className="mt-10 w-48 rounded-[32px] [background:linear-gradient(90deg,_#f56d04,_#fb9709)] h-16 flex flex-row items-center justify-center gap-4 py-2 px-4 box-border text-xl text-white "
                >
                Talk to us
                <ArrowRightCircle className="w-7 h-7" />
                </button> */}
                <TerraButton className="mt-4" onClick={handleClick}/>
            </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
            <div className=" backdrop-blur-md bg-white/10  rounded-2xl p-8 max-w-md w-full text-white shadow-lg">
                <h1 className="xl:text-3xl  mb-4">Services Overview</h1>
                <div className="w-full relative flex flex-col items-start justify-start gap-4 text-center xl:text-xl text-gray font-lufga">
                  <div className="self-stretch rounded-3xl flex flex-row items-center justify-start py-0 px-6 gap-4">
                    <div className="w-[15px] relative rounded-[50%] bg-amber-600 h-[15px]" />
                    <div className="relative tracking-[0.04px] leading-[30px] font-light">AI Solutions</div>
                  </div>
                  <div className="self-stretch rounded-3xl flex flex-row items-center justify-start py-0 px-6 gap-4">
                    <div className="w-[15px] relative rounded-[50%] bg-amber-600 h-[15px]" />
                    <div className="relative tracking-[0.04px] leading-[30px] font-light">Design</div>
                  </div>
                  <div className="self-stretch rounded-3xl flex flex-row items-center justify-start py-0 px-6 gap-4">
                    <div className="w-[15px] relative rounded-[50%] bg-amber-600 h-[15px]" />
                    <div className="relative tracking-[0.04px] leading-[30px] font-light">Mobile App</div>
                  </div>
                  <div className="self-stretch rounded-3xl flex flex-row items-center justify-start py-0 px-6 gap-4">
                    <div className="w-[15px] relative rounded-[50%] bg-amber-600 h-[15px]" />
                    <div className="relative tracking-[0.04px] leading-[30px] font-light">Web App</div>
                  </div>
                  <div className="self-stretch rounded-3xl flex flex-row items-center justify-start py-0 px-6 gap-4">
                    <div className="w-[15px] relative rounded-[50%] bg-amber-600 h-[15px]" />
                    <div className="relative tracking-[0.04px] leading-[30px] font-light">Data Analysis</div>
                  </div>
                </div>
                <div className="text-amber-600 mt-10">
                  <button className="flex items-center xl:text-3xl gap-2">
                    Learn More
                    <ArrowRightCircle className="w-7 h-7" />
                  </button>
              </div>
            </div>
            
            <div className=" backdrop-blur-md bg-white/10  rounded-3xl p-6 max-w-md w-full text-white shadow-lg flex justify-center items-center flex-row gap-4">
            <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />
                <div className="xl:text-3xl font-extrabold text-amber-600 text-nowrap">2 +</div>
                <h1 className="xl:text-xl text-nowrap ">Number of Years</h1>
            </div>
            <div className=" backdrop-blur-md bg-white/10  rounded-3xl p-6 max-w-md w-full text-white shadow-lg flex justify-center items-center flex-row gap-4">
            <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none px-1" />
                <div className="xl:text-3xl font-extrabold text-amber-600 text-nowrap">15+</div>
                <h1 className="xl:text-xl text-nowrap ">Projects Completed</h1>
            </div>
            
        </div>
        <div className="col-span-1">
          <div className=" backdrop-blur-md bg-white/10  rounded-3xl p-6 max-w-md w-full text-white shadow-lg flex justify-center items-center flex-row gap-4">
           <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />     
                <h1 className="xl:text-2xl ">The Stack That Powers Innovation.</h1>
          </div>
        </div>
        <div className="col-span-3 flex flex-row">
            <ScrollingEffect
              ref={scrollRef}
              autoScroll={true}
              scrollSpeed={3000}
              showControls={false}
              pauseOnHover={false}
              gap={6}>
                <div className="flex flex-row gap-2 opacity-60">
              {stack.map((item, index) => (
                <div key={index} className="group relative items-center justify-center min-w-[200px] h-[120px] rounded-2xl overflow-hidden ">
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <img 
                      className="w-24 h-24 object-contai" 
                      src={item.image} 
                      alt={item.name} 
                    />
                  </div>
                  
                </div>
              ))}
            </div>
            </ScrollingEffect>
        </div>
      </div>



      {/* Mobile view */}
       <div className=" relative z-20 lg:hidden gap-4 items-center justify-center   py-4">
        <div className=" flex flex-col  gap-4 px-4">
            <div className=" backdrop-blur-md bg-white/10  rounded-full max-w-md p-4 w-fit text-white shadow-lg flex justify-start items-start flex-row">
                <Rocket className="w-4 h-4 text-[#fd630a] mr-4" />
                <h1 className="text-sm text-nowrap ">AI-first digital experiences.</h1>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-extralight  text-[#FDA10A]">Future-Proof<br /> Software.<br /> Built for Impact.</h1>
                <p className="text-lg text-gray-400">We craft scalable, user-driven digital solutions that empower startups and enterprises to move faster, smarter, and better.</p>
                {/* <button
                
                className=" w-fit rounded-[32px] [background:linear-gradient(90deg,_#f56d04,_#fb9709)]  flex flex-row items-center justify-center gap-4 py-2 px-4 box-border text-xl text-white "
                >
                Talk to us
                <ArrowRightCircle className="w-7 h-7" />
                </button> */}
                <div className="">
                  <TerraButton className=" " padding="pl-6 pr-2 py-2 rounded-4xl text-sm gap-6 " img="w-3"/>
                </div>
                <div className=" backdrop-blur-md bg-white/10 mt-4 rounded-2xl p-4 max-w-md w-full text-white shadow-lg flex justify-center items-center flex-row gap-4">
                <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />
                <div className="text-xl font-extrabold text-amber-600 text-nowrap">2 +</div>
                <h1 className="text-xl text-nowrap ">Number of Years</h1>
            </div>
            <div className=" backdrop-blur-md bg-white/10  rounded-2xl p-4 max-w-md w-full text-white shadow-lg flex justify-center items-center flex-row gap-4">
            <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none px-1" />
                <div className="text-xl font-extrabold text-amber-600 text-nowrap">15+</div>
                <h1 className="text-xl text-nowrap ">Projects Completed</h1>
            </div>
             <div className="">
          <div className=" text-white  flex flex-col justify-center items-center text-center mt-2">
                <h1 className="text-xl ">The Stack That Powers Innovation.</h1>
                <div className=" bottom-0 left-0 w-full h-[1.5px] opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />
          </div>
        </div>
        
            </div>
        </div>
        <div className="col-span-3 flex flex-row">
            <ScrollingEffect
              ref={scrollRef}
              autoScroll={true}
              scrollSpeed={3000}
              showControls={false}
              pauseOnHover={false}
              gap={0}>
                <div className="flex flex-row  opacity-60">
              {stack.map((item, index) => (
                <div key={index} className="group relative items-center justify-center min-w-[120px] h-[100px] rounded-2xl overflow-hidden ">
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <img 
                      className="w-24 h-24 object-contain" 
                      src={item.image} 
                      alt={item.name} 
                    />
                  </div>
                  
                </div>
              ))}
            </div>
            </ScrollingEffect>
        </div>
       </div>
    </div>
  );
};

export default HeroSection;
