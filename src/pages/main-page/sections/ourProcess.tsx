
// import { SearchIcon } from "lucide-react"

import ProcessCardItem from "@/components/processCard"

const imageData = [
  {
    imageSrc: "/processcard/Vector.svg",
    cl: "absolute top-[0px] left-[195px] w-[170px] opacity-[0.4] mix-blend-overlay"
  },
  {
    imageSrc: "/processcard/2.svg",
    cl: "absolute top-[0px] left-[185px] w-[280px] opacity-[0.4] mix-blend-overlay"
  },
  {
    imageSrc: "/processcard/3.svg",
    cl: "absolute top-[0px] left-[130px] w-[295px] opacity-[0.4] mix-blend-overlay"
  },
  {
    imageSrc: "/processcard/4.svg",
    cl: "absolute top-[0px] left-[120px] w-[320px] opacity-[0.4] mix-blend-overlay"
  },
]

const ProcessCardData = [
  {
    title: "Discover",
    description: "We kick things off by understanding your business goals, target users, and challenges. Through stakeholder calls, market research, and technical discovery, we lay the foundation for a successful build.",
    img: "mainicons/compass-96.png",
  },
  {
    title: "Design",
    description: "We bring ideas to life through user flows, wireframes, and high fidelity UI designs. Expect collaborative feedback loops, modern design systems, and pixel perfect prototypes.",
    img: "mainicons/icon-drawing-96.png",
  },
  {
    title: "Develop",
    description: "Our engineers write scalable, secure code using the latest tech stacks and integrate AI tools where needed all following agile sprints and weekly demos.",
    img: "mainicons/source-code-96.png",
  },
  {
    title: "Deliver & Support",
    description: "After rigorous QA and user testing, we deploy to production. We stay with you post-launch for monitoring, iteration, and growth support.",
    img: "mainicons/handshake-96.png",
  },
]

export default function OurProcess() {
  return (
        <div className="px-4 md:px-4 flex flex-col  gap-5  font-lufga mt-10 xl:mt-20 ">
            <div className="flex flex-col items-center justify-center text-center mb-10">
                <h2 className="text-6xl font-extralight mb-4 text-[#FDA10A] ">Our Process</h2>
                <p className="text-2xl font-extralight text-neutral-400 ">
                A proven approach that transforms your vision into scalable, intelligent software.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center sm:flex-row gap-5 sm:flex-wrap xl:flex-nowrap">
            {ProcessCardData.map((item, index) => (
                <ProcessCardItem
                key={index}
                icon={item.img}
                title={item.title}
                description={item.description}
                imageSrc={imageData[index].imageSrc}
                imageClass={imageData[index].cl}
                />
            ))}
            </div>
        </div>
   
  )
}
