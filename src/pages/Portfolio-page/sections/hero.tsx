import TerraButton from "@/components/button"
import { Rocket } from "lucide-react"
import { useNavigate } from "@tanstack/react-router";
const PHero = () => {
   const navigate =useNavigate();
  
    const handleClick = () => {
    navigate({ to: '/company-portfolio' }) 
  }
  return (
    <div className=" text-white font-lufga mt-6 md:mt-20 px-4 container mx-auto">
      <div className="container mx-auto flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className="flex flex-col  gap-4 items-center justify-center">
            <div className="z-0 backdrop-blur-md bg-white/10  rounded-full py-4 px-4 md:px-10  text-white shadow-lg flex justify-center items-center flex-row">
                <Rocket className=" text-[#FDA10A] mr-4" />
                <p className="text-sm md:text-2xl ">If our portfolio sparked ideas or matched your vision.</p>
            </div>
            <div className="flex flex-col mt-8 items-start  md:items-center gap-6 ">
                <h1 className="text-4xl md:text-6xl font-extralight mb-4 text-[#FDA10A]">Inspired by Our Work?<span><br/>Let’s Build Yours Next.</span></h1>
                <p className="md:text-2xl text-neutral-400 text-left md:text-center">Whether you're a startup with bold goals or an enterprise exploring AI solutions, we’re ready to collaborate. Let’s talk about how we can bring your next big idea to life.</p>
                <TerraButton className="mt-6" padding='pl-6 pr-1 py-1 rounded-4xl text-sm md:text-lg gap-2' label="View Company Portfolio"  onClick={handleClick}/>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default PHero
