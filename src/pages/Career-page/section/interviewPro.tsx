import { SearchIcon } from "lucide-react"
import ProcessCardItem from "@/components/processCard"


const imageData = [
  {
    imageSrc: "Vector.svg",
    cl: "absolute top-[0px] left-[195px] w-[170px] opacity-[0.4] mix-blend-overlay"
  },
  {
    imageSrc: "2.svg",
    cl: "absolute top-[0px] left-[185px] w-[280px] opacity-[0.4] mix-blend-overlay"
  },
  {
    imageSrc: "3.svg",
    cl: "absolute top-[0px] left-[130px] w-[295px] opacity-[0.4] mix-blend-overlay"
  },
  {
    imageSrc: "4.svg",
    cl: "absolute top-[0px] left-[120px] w-[320px] opacity-[0.4] mix-blend-overlay"
  },
]

const WorkCardData = [
  {
    title: "Application Review",
    description: "Once you apply, our hiring team carefully reviews your profile, portfolio, and alignment with the role.",
    icon: SearchIcon,
    footer: "Within 3–5 working days",
  },
  {
    title: "Initial Screening Call",
    description: "A friendly chat to understand your background, expectations, and answer your questions about TerraCodeDev.",
    icon: SearchIcon,
    footer: "Week 1 – 15 mins",
  },
  {
    title: "Skill Assessment",
    description: "Depending on the role, you may complete a short task or walk us through previous work. We want to see how you think, not just what you know.",
    icon: SearchIcon,
    footer: "Week 2 (Time varies by role)",
  },
  {
    title: "Final Interview",
    description: "Meet your potential team lead and talk deeper about your process, goals, and how you’d work with us day-to-day.",
    icon: SearchIcon,
    footer: "Week 2–3 (30–60 mins)",
  },
]

const InterviewProcess = () => {
  return (
     <div className="flex flex-col gap-5  font-lufga mt-10 xl:mt-20">
                <div className="flex flex-col items-center justify-center text-center mb-10">
                    <h2 className="text-6xl font-extralight mb-4 text-[#FDA10A] ">Our Interview Process</h2>
                    <p className="text-2xl font-extralight text-neutral-400 ">
                    We value your time - that’s why our hiring process is fast, friendly, and focused on finding a great mutual fit.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center sm:flex-row gap-5 flex-wrap xl:flex-nowrap"> 
                {WorkCardData.map((item, index) => (
                    <ProcessCardItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    imageSrc={imageData[index].imageSrc}
                    imageClass={imageData[index].cl}
                    footer={item.footer} // Pass footer if needed
                    />
                ))}
                </div>
            </div>
  )
}

export default InterviewProcess