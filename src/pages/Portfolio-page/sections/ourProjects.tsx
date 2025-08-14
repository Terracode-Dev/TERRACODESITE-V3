import { useMemo, useState } from "react"

const projects = [
    {

        title: "Web Design & Development",
        description: "A modern website for House Of Vision (Pvt) Ltd. ",
        id: "1",
        category: "Development",
        img: "/portfolio/HOV Mockup.png"
    },
    {

        title: "Business Website Solution",
        description: "A modern website for Inpro Industries (Pvt) Ltd. ",
        id: "2",
        category: "Development",
        img: "/portfolio/inpro Mockup.png"
    },
    {

        title: "Web Design & Development",
        description: "Platform for booking single tickets for entire journeys in Transport Services.",
        id: "3",
        category: "Development",
        img: "/portfolio/transit.png"
    },
    
    {
        title: "Content Management System",
        description: "CMS for a Cleaning Service Provider",
        id: "4",
        category: "System",
        img: "/portfolio/CMS.png"
    },
    {
        title: "Data Management System",
        description: "Intelligent DMS for city-wide data with advanced storage, analytics, and user management.",
        id: "5",
        category: "System",
        img: "/portfolio/polls.png"
    },
    {
        title: "Mobile App Design & Development",
        description: "Mobile application for searching for lawyers and attorneys.",
        id: "6",
        category: "Mobile",
        img: "/portfolio/mobileapp.png"
    },
    {
        title: "Inventory Management System",
        description: "Inventory management system for House Of Vision (Pvt) Ltd.",
        id: "7",
        category: "System",
        img: "/portfolio/hovims.png"
    },
    
]

const OurProjects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')

    // Get unique categories and their counts
        const categoryStats = useMemo(() => {
            const stats = projects.reduce((acc, project) => {
                acc[project.category] = (acc[project.category] || 0) + 1
                return acc
            }, {} as Record<string, number>)
            
            return {
                All: projects.length,
                ...stats
            }
        }, [])
    
        // Filter positions based on selected category and search term
        const filteredPositions = useMemo(() => {
            return projects.filter(project => {
                const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
                return matchesCategory
            })
        }, [selectedCategory])


  return (
    <> 
    <div className=" text-white font-lufga my-20 container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col mt-8 items-start md:items-center gap-6 ">
            <h1 className="text-4xl md:text-6xl font-extralight mb-4 text-[#FDA10A] ml-4 sm:ml-0">Our Projects</h1>
            <p className="md:text-2xl text-neutral-400  md:text-center ml-4 sm:ml-0">Stay ahead with expert takes on AI, engineering, design, and startup strategy.</p>
        </div>
        <div>
              {/* Filter Buttons */}
                <div className="mt-20 flex flex-wrap gap-2 items-center justify-center">
                    {Object.entries(categoryStats).map(([category, count]) => (
                        <button 
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`rounded-full p-2 md:p-4 flex justify-center items-center flex-row gap-2 transition-colors ${
                                selectedCategory === category 
                                    ? 'bg-white text-black font-bold lg:text-xl' 
                                    : 'bg-neutral-500 text-white hover:bg-neutral-400 lg:text-xl'
                            }`}
                        >
                            <div className="w-3 h-3 rounded-full " style={{ backgroundColor: category === selectedCategory ? '#F56D04' : 'transparent' }}></div>
                            <span>{category === 'All' ? 'All' : category}</span>
                            <span>({count})</span>
                        </button>
                    ))}
                </div>
                 {/* Display filtered positions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-6 px-4">
                {filteredPositions.map((position, index) => (
                    <div key={`${position.id}-${index}`} className="p-6 rounded-3xl sm:rounded-lg  hover:scale-105 transition-transform duration-300 cursor-pointer relative overflow-hidden">
                        <img src={position.img} alt={position.title} className="w-full object-cover rounded-lg mb-4" />
                        <h3 className="text-xl lg:text-2xl font-semibold text-[#F56D04] mb-2">{position.title}</h3>
                        <p className="text-white mb-3 text-2xl lg:text-3xl">{position.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default OurProjects