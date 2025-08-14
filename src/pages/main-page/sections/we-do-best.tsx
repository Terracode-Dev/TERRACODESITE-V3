const services = [
  {
    title: 'Custom Software Development',
    description: 'We build tailored software solutions that solve real business problems - from scratch to scale.',
    tags: ['SaaS', 'Enterprise', 'Product Engineering'],
    img: 'mainicons/icons8-software-development-96.png'
  },
  {
    title: 'Mobile App Development',
    description: 'We create engaging mobile applications that resonate with users and enhance brand visibility.',
    tags: ['iOS App', 'Android App', 'Cross-Platform Solutions'],
    img: 'mainicons/icons8-phonelink-setup-96.png'
  },
  {
    title: 'AI & Machine Learning Solutions',
    description: 'Supercharge your product with intelligent features that adapt, learn, and evolve.',
    tags: ['Predictive Models', 'NLP', 'Generative AI'],
    img: 'mainicons/icons8-artificial-intelligence-96.png'
  },
  {
    title: 'UI/UX Design',
    description: 'Human-first design with aesthetics that convert and experiences that stick.',
    tags: ['Wireframes', 'Design', 'User Research'],
    img: 'mainicons/icons8-wacom-tablet-96.png'
  },
  {
    title: 'Web Application Development',
    description: 'Clean code meets exceptional UX in lightning fast web experiences.',
    tags: ['React.js', 'Next.js', 'API integrations'],
    img: 'mainicons/icons8-laptop-coding-96.png'
  },
  {
    title: 'Cloud & DevOps Engineering',
    description: 'Infrastructure that scales, automates, and keeps you running 24/7.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
    img: 'mainicons/icons8-cloud-connection-97.png'
  },
];

export default function WhatWeDoBest() {
  return (
    <section className=" px-4 md:px-4 bg-[#000] font-lufga mt-10 xl:mt-20 container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-[#FDA10A] text-6xl font-light mb-2">What We Do Best</h2>
        <p className="text-gray-400 text-2xl">Scalable tech. Smart experiences. Delivered with precision.</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-8xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-[#1A1A1A] rounded-xl p-6 text-white transition-colors duration-800 group gap-6 border-transparent hover:bg-[#2C2C2C] cursor-pointer relative overflow-hidden  xl:h-[450px] justify-between"
          >
            {/* Top gradient line on hover */}
            {/* <div className="absolute top-0 left-0 w-full h-[1.5px] opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none" /> */}
            
            {/* Bottom gradient line on hover */}
            <div className="absolute bottom-0 left-0 w-full h-[1.5px] opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gradient-to-r from-transparent via-orange-500 to-transparent pointer-events-none " />

            <div className="flex justify-center ">
              <span ><img src={service.img} alt="Service Icon" className="w-10 h-10" /></span>
            </div>
            <h3 className="text-4xl text-white">
              {service.title}
            </h3>
            <p className="text-[#8E8E8E] group-hover:text-[#ffff] mb-4 transition-colors duration-800 text-2xl font-light">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-4 bg-neutral-800 text-[#8E8E8E] group-hover:text-[#ffff] text-lg px-6 py-1 rounded-full transition-colors duration-800"
                >
                  <div className="rounded-full bg-[#A75516] group-hover:bg-[#f56d04] h-4 w-4 transition-colors duration-800"/>{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}