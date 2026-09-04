import TerraButton from "@/components/button";
import Navbar from "@/components/navbar";
import { ScrollingEffect,  type ScrollingEffectRef } from "@/components/scrollEffect";
import { Link,  useNavigate } from "@tanstack/react-router";
import { ArrowRightCircle, Heart,  LucideLightbulb, Rocket, Send } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { articlesData } from "@/pages/Article-page/NewArticle";
import { loadLikedArticleIds } from "@/lib/articleLikes";

// The most recently published article, used to feature live stats on the homepage teaser
const latestArticle = articlesData[articlesData.length - 1];

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
  {
    name: "Item 3",
    image: "/logo/rust.png"
  },
  {
    name: "Item 3",
    image: "/logo/nest.png"
  },
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
  // Live like count for the featured article, kept in sync with the articles page via localStorage
  const [likedArticleIds] = useState(() => loadLikedArticleIds());
  const latestArticleLikes = latestArticle.comments + (likedArticleIds.has(latestArticle.id) ? 1 : 0);

  const handleClick = () => {
  navigate({ to: '/contact' }) // e.g., '/about', '/dashboard', etc.
}

  const scrollToWhatWeDoBest = () => {
    const whatWeDoBestSection = document.getElementById('what-we-do-best');
    if (whatWeDoBestSection) {
      whatWeDoBestSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <div className="relative overflow-hidden font-lufga   ">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onError={(e) => console.error('Video failed to load:', e)}
        onCanPlay={(e) => {
                console.log('Video ready to play');
                e.currentTarget.playbackRate = 0.4; // 75% speed
            }}
      >
        <source src="/hero/Hero.mp4" type="video/mp4" />
        <source src="/hero/Hero.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 z-10" />
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay:0 , ease: "easeInOut" }}
      className="relative inset-0  z-30  mt-5 lg:mt-10 xl:container mx-auto" >
       <Navbar/> 
       </motion.div>
      {/* Content */}
      <div className="hidden relative z-20 lg:grid grid-cols-4 gap-4 items-center justify-center mt-5 xl:px-4 py-8 xl:container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 , ease: "easeInOut" }}
          className="col-span-1 flex flex-col justify-start items-start gap-4"
        >
          <div className="relative max-w-md w-full text-white">
            <div className="backdrop-blur-md bg-white/10 rounded-full p-6 shadow-lg flex justify-center items-center flex-row overflow-hidden relative">
              {/* Gradient line inside this rounded box */}
              <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />
                
                <LucideLightbulb className="w-6 h-6 xl:w-10 xl:h-10 text-[#FDA10A] mr-4" />
                <p className="text-lg xl:text-2xl text-nowrap">Build Your Ideas!</p>
              </div>
            </div>
            <Link
              to="/articles/$slug"
              params={{ slug: latestArticle.slug }}
              className="text-white"
            >
            <div className=" backdrop-blur-sm bg-white/10  rounded-2xl p-8 max-w-md w-full text-white shadow-lg">
                <h2 className="text-3xl  mb-4">Latest Articles & News</h2>
                <img className="object-cover w-full h-full mb-4 rounded-md" src="/article/Hero-A2.png" alt="Vector" />
                <h3 className="text-lg">
                    Modern Commerce. Simplified.
                </h3>
                <p className="text-sm text-neutral-400">
                    26 August 2026
                </p>
                <div className="flex flex-row gap-4 items-center justify-between mt-4">
                  <div className="flex flex-row gap-4 items-center justify-center ">
                    <div className="backdrop-blur-sm bg-white/10 rounded-full px-3 py-1  flex items-center gap-4">
                       <Send className="w-4 h-4"/> {latestArticle.views}
                    </div>
                    <div className="backdrop-blur-sm bg-white/10 rounded-full px-3 py-1 flex items-center gap-4">
                       <Heart className={`w-4 h-4 ${likedArticleIds.has(latestArticle.id) ? "fill-[#FDA10A] text-[#FDA10A]" : ""}`}/> {latestArticleLikes}
                    </div>
                    </div>
                    {/* Read More Arrow */}
                    <div className=" hover:bg-white transition-colors rounded-full">
                      <img src="/Property 23.png" alt="Read More" />
                    </div>
                </div>

            </div>
            </Link>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        className="col-span-2 flex flex-col  gap-4 lg:px-10 xl:px-28">
            <div className=" backdrop-blur-md bg-white/10  rounded-full lg:p-4 lg:w-fit xl:p-6 max-w-md xl:w-full text-white shadow-lg flex justify-center items-center flex-row">
                <Rocket className="xl:w-10 xl:h-10 text-[#FDA10A] mr-4" />
                <p className="xl:text-2xl text-nowrap ">AI-first digital experiences.</p>
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
                <TerraButton className="mt-4 " onClick={handleClick}/>
            </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay:0.5, ease: "easeInOut" }}
         className="col-span-1 flex flex-col gap-4">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 2xl:p-8 max-w-xl w-full text-white shadow-lg transition-colors duration-800 group hover:bg-[#2C2C2C] relative">
    <h2 className="xl:text-3xl mb-4">Services Overview</h2>
    <div className="w-full relative flex flex-col items-start justify-start gap-4 text-center xl:text-xl text-gray font-lufga">
      <div className="self-stretch rounded-3xl flex flex-row items-center justify-start py-0 2xl:px-6 gap-4">
        <div className="w-[15px] relative rounded-[50%] bg-amber-600 group-hover:bg-[#f56d04] transition-colors duration-800 h-[15px]" />
        <div className="relative tracking-[0.04px] leading-[30px] font-light group-hover:text-white transition-colors duration-800">Business Software</div>
      </div>
      <div className="self-stretch rounded-3xl flex flex-row items-center justify-start py-0 2xl:px-6 gap-4">
        <div className="w-[15px] relative rounded-[50%] bg-amber-600 group-hover:bg-[#f56d04] transition-colors duration-800 h-[15px]" />
        <div className="relative tracking-[0.04px] leading-[30px] font-light group-hover:text-white transition-colors duration-800">AI Solutions</div>
      </div>
      <div className="self-stretch rounded-3xl flex flex-row items-center justify-start py-0 2xl:px-6 gap-4">
        <div className="w-[15px] relative rounded-[50%] bg-amber-600 group-hover:bg-[#f56d04] transition-colors duration-800 h-[15px]" />
        <div className="relative tracking-[0.04px] leading-[30px] font-light group-hover:text-white transition-colors duration-800">Web Applications</div>
      </div>
      <div className="self-stretch rounded-3xl flex flex-row items-center justify-start py-0 2xl:px-6 gap-4">
        <div className="w-[15px] relative rounded-[50%] bg-amber-600 group-hover:bg-[#f56d04] transition-colors duration-800 h-[15px]" />
        <div className="relative tracking-[0.04px] leading-[30px] font-light group-hover:text-white transition-colors duration-800">Mobile Applications</div>
      </div>
      <div className="self-stretch rounded-3xl flex flex-row items-center justify-start py-0 2xl:px-6 gap-4">
        <div className="w-[15px] relative rounded-[50%] bg-amber-600 group-hover:bg-[#f56d04] transition-colors duration-800 h-[15px]" />
        <div className="relative tracking-[0.04px] leading-[30px] font-light group-hover:text-white transition-colors duration-800">Cloud Operations</div>
      </div>
      <div className="self-stretch rounded-3xl flex flex-row items-center justify-start py-0 2xl:px-6 gap-4">
        <div className="w-[15px] relative rounded-[50%] bg-amber-600 group-hover:bg-[#f56d04] transition-colors duration-800 h-[15px]" />
        <div className="relative tracking-[0.04px] leading-[30px] font-light group-hover:text-white transition-colors duration-800">UX Design</div>
      </div>
    </div>
    <div className="text-amber-600 mt-10">
     <button 
      className="flex items-center xl:text-3xl gap-2 group-hover:text-[#f56d04] transition-colors duration-800"
      onClick={scrollToWhatWeDoBest}
    >
      Learn More
      <ArrowRightCircle className="w-7 h-7" />
    </button>
    </div>
    
    {/* Bottom gradient line on hover */}
    <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />
</div>
            
            <div className=" backdrop-blur-md bg-white/10  rounded-3xl p-6 max-w-md w-full text-white shadow-lg flex justify-center items-center flex-row gap-4">
            <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />
                <div className="xl:text-3xl font-extrabold text-amber-600 text-nowrap">2 +</div>
                <p className="xl:text-xl text-nowrap ">Number of Years</p>
            </div>
            <div className=" backdrop-blur-md bg-white/10  rounded-3xl p-6 max-w-md w-full text-white shadow-lg flex justify-center items-center flex-row gap-4">
            <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none px-1" />
                <div className="xl:text-3xl font-extrabold text-amber-600 text-nowrap">15+</div>
                <p className="xl:text-xl text-nowrap ">Projects Completed</p>
            </div>
            
        </motion.div>
        <div className="col-span-1">
          <div className=" backdrop-blur-md bg-white/10  rounded-3xl p-6 max-w-md w-full text-white shadow-lg flex justify-center items-center flex-row gap-4">
           <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />     
                <h2 className="xl:text-2xl ">The Stack That Powers Innovation.</h2>
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
                  <div className="w-full h-full flex items-center justify-center p-4 text-white">
                    <img 
                      className="w-24 h-24 object-contain " 
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
                <p className="text-sm text-nowrap ">AI-first digital experiences.</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-5xl font-extralight text-[#FDA10A]" aria-hidden="true">Future-Proof<br /> Software.<br /> Built for Impact.</div>
                <p className="text-lg text-gray-400">We craft scalable, user-driven digital solutions that empower startups and enterprises to move faster, smarter, and better.</p>
                {/* <button
                
                className=" w-fit rounded-[32px] [background:linear-gradient(90deg,_#f56d04,_#fb9709)]  flex flex-row items-center justify-center gap-4 py-2 px-4 box-border text-xl text-white "
                >
                Talk to us
                <ArrowRightCircle className="w-7 h-7" />
                </button> */}
                <div className="">
                  <TerraButton className=" " padding="pl-6 pr-2 py-2 rounded-4xl text-sm gap-6 " img="w-3" onClick={handleClick}/>
                </div>
                <div className=" backdrop-blur-md bg-white/10 mt-4 rounded-2xl p-4 max-w-md w-full text-white shadow-lg flex justify-center items-center flex-row gap-4">
                <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />
                <div className="text-xl font-extrabold text-amber-600 text-nowrap">2 +</div>
                <p className="text-xl text-nowrap ">Number of Years</p>
            </div>
            <div className=" backdrop-blur-md bg-white/10  rounded-2xl p-4 max-w-md w-full text-white shadow-lg flex justify-center items-center flex-row gap-4">
            <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none px-1" />
                <div className="text-xl font-extrabold text-amber-600 text-nowrap">15+</div>
                <p className="text-xl text-nowrap ">Projects Completed</p>
            </div>
             <div className="">
          <div className=" text-white  flex flex-col justify-center items-center text-center mt-8">
                <h2 className="text-xl ">The Stack That Powers Innovation.</h2>
                <div className=" bottom-0 left-0 w-full h-[1.5px] opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" />
          </div>
        </div>
        
            </div>
        </div>
        <div className="col-span-3 flex flex-row ">
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
                      className="w-20 h-20 object-contain" 
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
