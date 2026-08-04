import TerraButton from '@/components/button'
import { useState, useMemo } from 'react'

const positions = [
    {
        title: "Marketing Executive",
        description: "Looking for a creative marketer to manage campaigns and boost brand awareness.",
        location: "📍 Colombo",
        type: " 🏢 On-Site",
        department: "🕒 Full-Time",
        id: "1",
        category: "Marketing",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdBmvA2Ch9NhQHsSeDHwLAeutn79YdCdk51fJ96LBIXsTpI2A/viewform?usp=sharing&ouid=118157052958448140209"
    },
    {
        title: "Software Engineer Intern",
        description: "Passionate students eager to learn, build software, and grow with our engineering team.",
        location: "📍 Colombo",
        type: " 🔄 Hybrid",
        department: "🕒 Internship",
        id: "2",
        category: "Development",
        link: "https://forms.gle/1TCikEHNKsEiGvMPA"
    },
    // {
    //     title: "UX Designer",
    //     description: "Design user-centered experiences that delight and engage.",
    //     location: "📍 Colombo",
    //     type: " 🌐 Remote",
    //     department: "🕒 Full-Time",
    //     id: "3",
    //     category: "Design",
    //     link: "https://forms.zohopublic.com/directorterrac1/form/JoinTerracodeFamily/formperma/1MsxKJIu9vhER63oQzDXV_6DZ2o5DgGlI6DLgAOzNqo"
    // },
    
    // {
    //     title: "Marketing Specialist",
    //     description: "Develop and execute marketing strategies to grow our brand.",
    //     location: "📍 Colombo",
    //     type: " 🌐 Remote",
    //     department: "🕒 Full-Time",
    //     id: "6",
    //     category: "Marketing",
    //     link: "https://forms.zohopublic.com/directorterrac1/form/JoinTerracodeFamily/formperma/1MsxKJIu9vhER63oQzDXV_6DZ2o5DgGlI6DLgAOzNqo"
    // },
    
]

export default function Positions() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchTerm, setSearchTerm] = useState('')

    // Get unique categories and their counts
    const categoryStats = useMemo(() => {
        const stats = positions.reduce((acc, position) => {
            acc[position.category] = (acc[position.category] || 0) + 1
            return acc
        }, {} as Record<string, number>)
        
        return {
            All: positions.length,
            ...stats
        }
    }, [])

    // Filter positions based on selected category and search term
    const filteredPositions = useMemo(() => {
        return positions.filter(position => {
            const matchesCategory = selectedCategory === 'All' || position.category === selectedCategory
            const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                position.description.toLowerCase().includes(searchTerm.toLowerCase())
            return matchesCategory && matchesSearch
        })
    }, [selectedCategory, searchTerm])

    return (
        <div className="flex flex-col gap-5 font-lufga mt-10 xl:mt-20 container mx-auto">
            <div className="flex flex-col items-center justify-center text-start md:text-center mb-10">
                <h2 className="text-4xl md:text-6xl font-extralight mb-4 text-[#FDA10A]">All Open Positions</h2>
            </div>      
            
            <div className="flex flex-col px-4">
                <input 
                    type="text" 
                    placeholder="Search positions..." 
                    className="w-full p-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FDA10A]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                {/* Filter Buttons */}
                <div className="mt-4 flex flex-wrap gap-2 ">
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
                            <span>{category === 'All' ? 'All openings' : category}</span>
                            <span>({count})</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Display filtered positions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 px-4 ">
                {filteredPositions.map((position, index) => (
                    <div key={`${position.id}-${index}`} className="bg-neutral-800 p-6 rounded-3xl sm:rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                        <p className="text-neutral-300 mb-3">{position.description}</p>
                        <div className='flex flex-col justify-center items-center sm:justify-start sm:items-start gap-2 md:gap-0 md:flex-row md:justify-between md:items-center mb-4'>
                            <div className="flex gap-4 text-sm w-fit px-4 py-2 rounded-3xl bg-neutral-600 text-white">
                                <div className='flex flex-row gap-2 items-center'>
                                    <span>{position.location}</span>
                                    <span>|</span>
                                    <span>{position.type}</span>
                                    <span>|</span>
                                    <span>{position.department}</span>
                                </div>
                            </div>
                            <div >
                                    <TerraButton label="Overview" padding='pl-2 pr-1 py-1 rounded-4xl text-sm gap-2' img = 'w-3' imgpadding='p-2' onClick={() => window.open(position.link, "_blank")}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
