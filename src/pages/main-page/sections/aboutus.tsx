import { Link } from '@tanstack/react-router'

const Aboutus = () => {
  return (
     <div className=" w-screen relative left-1/2 right-1/2 -ml-[51vw] -mr-[50vw] bg-[#1A1A1A] font-lufga ">
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 container mx-auto ">
        <div className="flex flex-col  items-start justify-start p-4 md:space-y-5">
            <h1 className="text-4xl md:text-6xl text-[#FDA10A]">About us</h1>
            <p className="text-[#A4A4A4] text-lg md:text-xl">
              We’re Your AI-Powered Innovation Partners.
            </p>
            <p className="text-white mt-2 text-2xl md:text-3xl">
              We are TerraCode, a future-focused development partner crafting intelligent digital products. Specializing in AI-integrated software, we help startups and enterprises build scalable, user-first solutions that drive impact.
            </p>
            <Link to="/about">
              <h1 className="text-lg md:text-2xl text-[#f56d04] mt-4 hover:text-[#FDA10A]">
                Learn More →
              </h1>
            </Link>
        </div>
        <div className=" text-white flex flex-wrap ">
          <div className='bg-[#303030] rounded-4xl md:p-2 m-2 '>
            <div className='flex items-center md:gap-2 px-4'>
                <div className='rounded-full bg-[#FDA10A] h-3 w-3 md:h-4 md:w-4'></div>
                <p className='p-2 text-sm md:text-xl'>Guided by data.</p>
            </div>
          </div>
          <div className='bg-[#303030] rounded-4xl md:p-2 m-2'>
            <div className='flex items-center md:gap-2 px-4'>
                <div className='rounded-full bg-[#FDA10A] h-3 w-3 md:h-4 md:w-4'></div>
                <p className='p-2 text-sm md:text-xl'>Driven by curiosity.</p>
            </div>
          </div>
          <div className='bg-[#303030] rounded-4xl md:p-2 m-2'>
            <div className='flex items-center md:gap-2 px-4'>
                <div className='rounded-full bg-[#FDA10A] h-3 w-3 md:h-4 md:w-4'></div>
                <p className='p-2 text-sm md:text-xl'>Obsessed with impact.</p>
            </div>
          </div>
            <div className='bg-[#303030] rounded-4xl md:p-2 m-2'>
                <div className='flex items-center md:gap-2 px-4'>
                    <div className='rounded-full bg-[#FDA10A] h-3 w-3 md:h-4 md:w-4'></div>
                    <p className='p-2 text-sm md:text-xl'>Empowered</p>
                </div>
            </div>
             <div className='bg-[#303030] rounded-4xl md:p-2 m-2'>
                <div className='flex items-center md:gap-2 px-4'>
                    <div className='rounded-full bg-[#FDA10A] h-3 w-3 md:h-4 md:w-4'></div>
                    <p className='p-2 text-sm md:text-xl'>Collaboration.</p>
                </div>
            </div>
            <div className='bg-[#303030] rounded-4xl md:p-2 m-2'> 
            <div className='flex items-center md:gap-2 px-4'>
                <div className='rounded-full bg-[#FDA10A] h-3 w-3 md:h-4 md:w-4'></div>
                <p className='p-2 text-sm md:text-xl'>Innovative solutions.</p>
            </div>
          </div>
          <div className='bg-[#303030] rounded-4xl md:p-2 m-2'>
            <div className='flex items-center md:gap-2 px-4'>
                <div className='rounded-full bg-[#FDA10A] h-3 w-3 md:h-4 md:w-4'></div>
                <p className='p-2 text-sm md:text-xl'>Focused on user experience.</p>
            </div>
          </div>
          <div className='bg-[#303030] rounded-4xl md:p-2 m-2'>
            <div className='flex items-center md:gap-2 px-4'>
                <div className='rounded-full bg-[#FDA10A] h-3 w-3 md:h-4 md:w-4'></div>
                <p className='p-2 text-sm md:text-xl'>User experience.</p>
            </div>
          </div>
            <div className='bg-[#303030] rounded-4xl md:p-2 m-2'>
                <div className='flex items-center md:gap-2 px-4'>
                    <div className='rounded-full bg-[#FDA10A] h-3 w-3 md:h-4 md:w-4'></div>
                    <p className='p-2 text-sm md:text-xl'>Inspired by creativity.</p>
                </div>
            </div>
             <div className='bg-[#303030] rounded-4xl md:p-2 m-2'>
                <div className='flex items-center md:gap-2 px-4'>
                    <div className='rounded-full bg-[#FDA10A] h-3 w-3 md:h-4 md:w-4'></div>
                    <p className='p-2 text-sm md:text-xl'>Committed to excellence.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus