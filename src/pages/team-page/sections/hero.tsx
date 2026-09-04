import TerraButton from "@/components/button"

import ProfileCircles from "@/components/profile-circle"
import { useNavigate } from "@tanstack/react-router";
import { Rocket } from "lucide-react"

const Hero = () => {
  const navigate =useNavigate();
  
    const handleClick = () => {
    navigate({ to: '/contact' }) // e.g., '/about', '/dashboard', etc.
  }
  return (
    <div className="bg-black text-white font-lufga mt-6 lg:mt-20 container mx-auto px-4">
      <div className="max-w-8xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col  gap-4 items-center">
            <div className=" backdrop-blur-md bg-white/10  rounded-full p-4 max-w-xl w-full text-white shadow-lg flex justify-center items-center flex-row">
                <Rocket className=" text-[#FDA10A] mr-4" />
                <p className="md:text-2xl">Smart tech starts with smarter humans.</p>
            </div>
            <div className="flex flex-col mt-8 md:px-24 items-center gap-6 ">
                <h1 className="text-4xl md:text-6xl font-extralight mb-4 text-[#FDA10A]">People Who Power the Code.</h1>
                <p className="md:text-2xl text-gray-400 md:text-center">At Terracode, our strength lies in our people - a passionate team of engineers, designers, thinkers, and innovators dedicated to delivering world-class digital solutions. We blend technical excellence with creative energy to help brands thrive in a connected world.</p>
                <TerraButton className="mt-6 md:mb-36" onClick={handleClick}/>
            </div>
        </div>
        {/* team members Images */}
        <div>
          <ProfileCircles />
          {/* <ProfileGrid /> */}
        </div>
      </div>
    </div>
    
  )
}

export default Hero
