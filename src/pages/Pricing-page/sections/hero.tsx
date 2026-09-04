import { Rocket } from "lucide-react"

const PricingHero = () => {
  return (
    <div className=" text-white font-lufga mt-6 md:mt-20 px-4 container mx-auto">
      <div className="container mx-auto flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className="flex flex-col  gap-4 items-center justify-center">
            <div className="z-0 backdrop-blur-md bg-white/10  rounded-full py-4 px-4 md:px-10  text-white shadow-lg flex justify-center items-center flex-row">
                <Rocket className=" text-[#FDA10A] mr-4" />
                <p className="text-sm md:text-2xl ">Choose the plan that fits your needs and budget.</p>
            </div>
            <div className="flex flex-col mt-8 items-start md:items-center gap-6 ">
                <h1 className="text-4xl md:text-6xl font-extralight mb-4 text-[#FDA10A]">Clear and Honest Pricing<br/> <span className="md:ml-30">No Hidden Fees</span></h1>
                <p className="md:text-2xl text-neutral-400 text-left md:text-center">We believe in clear, upfront pricing. Whether you’re starting small or scaling big, our plans are designed to give you maximum value without hidden fees. Pick your plan and start your journey today.</p>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default PricingHero
