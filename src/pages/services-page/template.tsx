import TerraButton from "@/components/button";
import { Rocket } from "lucide-react";
import React from "react";

import { useNavigate } from "@tanstack/react-router";


interface ServicePageProps {
  badge: string;
  title: string;
  image: string;
  name?: string;
  selectedCategory?: string;
  imageHeightClassName?: string;
  imageObjectPositionClassName?: string;
  imageFitClassName?: string;
}

const ServicePage: React.FC<ServicePageProps> = ({
  badge,
  title,
  image,
  name,
  selectedCategory,
  imageHeightClassName = "h-[31vh] md:h-[70vh]",
  imageObjectPositionClassName = "object-center",
  imageFitClassName = "object-cover"
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    const query = selectedCategory ? `?category=${encodeURIComponent(selectedCategory)}` : '';
    navigate({ to: `/digitalportfolio${query}`, hash: 'our-projects' });
  };

  return (
    <div className=" text-white font-lufga mt-5 lg:mt-20 px-4 container mx-auto">
      <div className="container mx-auto flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className="flex flex-col  gap-4 items-center justify-center">
            <div className=" backdrop-blur-md bg-white/10  rounded-full p-4 max-w-4xl w-full text-white shadow-lg flex justify-center items-center flex-row">
                            <Rocket className=" text-[#FDA10A] mx-4" />
                            <p className="md:text-2xl">{badge}</p>
                        </div>
            <div className="flex flex-col mt-8 items-start  md:items-center gap-6 ">
                <h1 className="text-4xl md:text-6xl font-extralight mb-4 text-[#FDA10A]">{title}</h1>
                <TerraButton className="mt-6" padding='pl-4 pr-2 py-1 rounded-4xl text-lg gap-2' label={name} onClick={handleClick} />
            </div>
        </div>
        {/* team members Images */}
        
        <div className={`relative rounded-3xl ${imageHeightClassName} w-full overflow-hidden mt-10`}>
        {/* Image */}
        <img
        src={image}
        alt={title}
        className={`${imageFitClassName} ${imageObjectPositionClassName} w-full h-full`} />
        </div>
         </div>
       </div>



  );
};

export default ServicePage;

