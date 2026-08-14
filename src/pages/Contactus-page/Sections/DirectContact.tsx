import {  Mail, MapPin, Phone, TimerIcon } from "lucide-react"

const DirectContact = () => {
  return (
    <div className="bg-black text-white font-lufga mt-10 xl:mt-20 px-4 md:px-4 container mx-auto">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extralight mb-4 text-[#FDA10A]">Direct Contact Details</h1>
          <p className="text-2xl text-gray-300">You can reach us directly through the following.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-8xl ">
            <div className="flex bg-neutral-900  rounded-3xl shadow-lg justify-center items-center p-5 md:px-6 hover:scale-105 transition-transform duration-300">
                <ul className=" space-y-4 md:space-y-6 mt-4 flex flex-col gap-2 ">
                    <a href="mailto:hello@terracodedev.com">
                      <li className="text-lg md:text-xl flex flex-row gap-4 items-center"><Mail/>hello@terracodedev.com</li>
                    </a>
                    <li className="text-md md:text-xl flex flex-row justify-start gap-4 items-center">
                      <Phone/>
                      <div className="flex flex-col lg:flex-row gap-2">
                        <a href="tel:+94112838640"> +94 11 283 86 40 </a> 
                        <span className="hidden lg:block">|</span>
                        <a href="tel:+94701908095"> +94 70 190 80 95 </a> 
                        <span className="hidden lg:block">|</span>
                        <a href="tel:+94770086857"> +94 77 008 68 57</a>
                      </div>
                    </li>
                    <a href="https://maps.app.goo.gl/YVNHYWkyXWK9wY9H8">
                      <li className="text-md md:text-xl flex flex-row gap-4 items-center">
                        <MapPin size={30}/> Terracode (PVT) LTD , 3rd Floor, No. 274, High Level Rd, Maharagama, Sri Lanka 
                      </li>
                    </a>
                    <li className="text-md md:text-xl flex flex-row gap-4 items-center">
                      <TimerIcon/> Hours: Monday – Friday | 9:00 AM – 6:00 PM (GMT+5:30)
                    </li>
                </ul>
            </div>
            <div className="hover:scale-105 transition-transform duration-300 rounded-3xl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.1175515283394!2d79.93532640131858!3d6.845155728964695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bcebb7c6e1b%3A0xa39d7c508900de37!2sTerracode%20Pvt%20Ltd!5e0!3m2!1sen!2slk!4v1753870091525!5m2!1sen!2slk"   loading="lazy" className="rounded-3xl w-full h-full invert-[0.91] hue-rotate-180" ></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DirectContact