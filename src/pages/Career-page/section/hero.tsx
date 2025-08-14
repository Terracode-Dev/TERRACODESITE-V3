import TerraButton from "@/components/button"
import { Rocket } from "lucide-react"

const Hero = () => {
  return (
    <div className=" text-white font-lufga mt-20 px-4 container mx-auto">
      <div className="container mx-auto flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className="flex flex-col  gap-4 items-center justify-center">
            <div className=" backdrop-blur-md bg-white/10  rounded-full py-4 md:px-10  text-white shadow-lg flex justify-center items-center flex-row">
                <Rocket className=" text-[#FDA10A] md:mr-4 w-20 h-8 " />
                <h1 className="text-md md:text-2xl ">Code with purpose. Design with impact. Grow with people who care.</h1>
            </div>
            <div className="flex flex-col mt-8 items-start  md:items-center gap-6 ">
                <h1 className="text-5xl md:text-6xl font-extralight mb-4 text-[#FDA10A]">Build the Future With Us</h1>
                <p className="text-2xl text-neutral-400 text-left md:text-center">We’re on a mission to craft powerful digital experiences using code, creativity, and AI. Join a team where innovation thrives, learning never stops, and every project is a new opportunity to level up.</p>
                <TerraButton className="mt-6" padding='pl-4 pr-2 py-1 rounded-4xl text-lg gap-2' label="View Openings"/>
            </div>
        </div>
        {/* team members Images */}
        
        <div className="relative rounded-3xl h-[31vh] md:h-[70vh] w-full overflow-hidden mt-10">
        {/* Image */}
        <img src="/career/career.jpg" alt="" className="object-cover w-full h-full" />

        {/* Black bottom-to-top gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
      </div>
        
      </div>
    </div>
    
  )
}

export default Hero