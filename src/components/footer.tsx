import TerraButton from "@/components/button";
import { Facebook, Instagram,  Linkedin} from "lucide-react";


export default function Footer() {
  return (
    <div className="w-full relative flex flex-col flex-wrap gap-4 items-center justify-start  text-left text-xl text-white font-lufga px-4 md:px-4 mt-20">
        <div className="self-stretch flex flex-col gap-4 sm:flex-row items-center justify-between py-8  ">
            <div className="flex-1 flex flex-col md:flex-row  md:items-start md:justify-between ">
                <div className="flex flex-col items-start justify-end gap-8">
                    <img className="w-[102px] h-[65px] object-cover" alt="" src="Frame 9.png" />
                    <a className="relative [text-decoration:underline] tracking-[0.04px] leading-6 font-semibold  text-[inherit]" href="mailto:hello@terracodedev.com" target="_blank">hello@terracodedev.com</a>
                   
                        <TerraButton/>
                        
                
                </div>
                
                    <div className="flex md:hidden flex-row items-center justify-between gap-4 ">
                        <div className=" flex flex-col items-start justify-start gap-6">
                            <div className="relative font-semibold">Company</div>
                            <div className="flex flex-col items-start justify-start gap-3 text-base">
                                <div className="relative leading-6">Contact Us</div>
                                <div className="relative leading-6">Careers</div>
                                <div className="relative leading-6">Portfolio</div>
                                <div className="relative leading-6">Team</div>
                                <div className="relative leading-6">Article page</div>
                                <div className="relative leading-6">Pricing Packages</div>
                            </div>
                        </div>
                        <div className=" flex flex-col items-start justify-start gap-6">
                            <div className="relative font-semibold">Services</div>
                            <div className="flex flex-col items-start justify-start gap-3 text-base">
                                <div className="relative leading-6">UI/UX Design</div>
                                <div className="relative leading-6">Web Application</div>
                                <div className="relative leading-6">Mobile Application</div>
                                <div className="relative leading-6">Artificial Intelligence</div>
                                <div className="relative leading-6">Quality Assurance</div>
                                <div className="relative leading-6">Support Services</div>
                            </div>
                        </div>
                    </div>
                     <div className="hidden  md:flex flex-col items-start justify-start gap-6 mt-20">
                            <div className="relative font-semibold">Company</div>
                            <div className="flex flex-col items-start justify-start gap-3 text-base">
                                <div className="relative leading-6">Contact Us</div>
                                <div className="relative leading-6">Careers</div>
                                <div className="relative leading-6">Portfolio</div>
                                <div className="relative leading-6">Team</div>
                                <div className="relative leading-6">Article page</div>
                                <div className="relative leading-6">Pricing Packages</div>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-col items-start justify-start gap-6">
                            <div className="relative font-semibold">Services</div>
                            <div className="flex flex-col items-start justify-start gap-3 text-base">
                                <div className="relative leading-6">UI/UX Design</div>
                                <div className="relative leading-6">Web Application</div>
                                <div className="relative leading-6">Mobile Application</div>
                                <div className="relative leading-6">Artificial Intelligence</div>
                                <div className="relative leading-6">Quality Assurance</div>
                                <div className="relative leading-6">Support Services</div>
                            </div>
                        </div>
                    <div className="self-stretch flex flex-col items-start justify-between gap-0">
                        <div className=" flex flex-col items-start justify-start gap-4">
                            <div className="self-stretch flex flex-row items-center justify-start gap-4">
                                {/* <img className="w-9 relative h-9 overflow-hidden shrink-0" alt="" src="sl.png" /> */}
                                <div className="text-wrap relative tracking-[0.04px] leading-6 font-semibold inline-block ">`Terracode Private Limited, </div>
                            </div>
                            <div className=" relative text-base leading-6 inline-block"><a href="https://maps.app.goo.gl/QKy9ety7Cet7NC4JA" target="_blank">
                                <p className="m-0">274 3/1 (3rd floor), Highlevel Rd,</p>
                                <p className="m-0">Maharagama, Sri Lanka</p>
                            </a></div>
                            <div className="self-stretch relative tracking-[0.04px] leading-6 font-semibold" ><a href="tel:+9477 582 4406">+9477 582 4406</a></div>
                        </div>
                        <div className=" h-8 flex flex-row items-center justify-start gap-6">
                           <a href="https://www.facebook.com/terracodedev" target="_blank" rel="noopener noreferrer"><Facebook/></a>
                           {/* <a href="https://twitter.com/terracodedev" target="_blank" rel="noopener noreferrer"><Twitter/></a> */}
                           <a href="https://www.linkedin.com/company/terracodedev" target="_blank" rel="noopener noreferrer"><Linkedin/></a>
                           <a href="https://instagram.com/terracodedev" target="_blank" rel="noopener noreferrer"><Instagram/></a>
                        </div>
                    </div>
                
            </div>
        </div>
    <div className="self-stretch -my-6 flex flex-row items-center justify-center pt-4 px-[100px] pb-6 text-base bg-[#1A1A1A]  ">
        <div className="relative tracking-[0.02em] font-medium">© Copyright 2025 by Terracode. All Rights Reserved.</div>
    </div>
</div>
  )
}
