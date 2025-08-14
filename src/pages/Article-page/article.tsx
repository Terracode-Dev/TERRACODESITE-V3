

export default function Article() {
  return (
    <div>
        <section className="container mx-auto px-4 py-10 text-white">
      {/* Author Info */}
      <div className="flex items-center space-x-4 mb-8">
        <img
          src="employee/IMG_1158.PNG"
          alt="Author"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">Nomin Sendinu</h3>
          <p className="text-sm text-gray-400">CEO & Co-founder, Terracode Private Limited</p>
          {/* <p className="text-sm text-gray-400">01 Jan 2024</p> */}
        </div>
      </div>

      {/* Article Content */}
      <article className="space-y-6 leading-relaxed text-xl text-gray-200 text-justify">
        {/* <h2 className="text-2xl font-bold mb-2">Article Heading</h2> */}
        <p>
          On April 18, 2024, we began our journey as a passionate tech startup with just 7 members. Day and night, we poured our efforts into developing a SaaS product tailored for medical professionals our very first milestone. Simultaneously, we delivered outstanding software development services for over 15 businesses within just one year of operations.
        </p>
        <p>
          As time progressed, so did our expertise and vision. We gradually evolved to build high-performance, next-generation ERP and CRM-like business tools—developed entirely using powerful languages such as Go (Golang) and Rust, alongside our own custom-built performance and security tools. These internal tools were crafted to ensure unmatched efficiency, speed, security, and scalability for our clients. While much of the industry remained reliant on traditional development infrastructures, we embraced innovation head-on. Integrating these advanced technologies into our development teams posed significant challenges, but our relentless commitment and adaptability made it possible.
        </p>
        <p>
          Midway through our journey, we expanded our service offerings to include AI integrations and custom AI solution development, especially for clients who had already built products with us. We took pride in upgrading their infrastructure with the latest technologies, helping them unlock new business capabilities and achieve even greater impact.
        </p>
        <p>
          On November 2024, we officially registered our company as a private limited company. Today, Terracode operates from our own office premises in Colombo, Sri Lanka, housing several incredible teams of developers, engineers, and innovators. Each team specializes in critical, in-demand technologies, working together to build robust software products that exceed our customers’ expectations and provide true value for their investments.
        </p>
        <p>
          Today, we’re also actively working on a suite of new software as a service products spanning diverse domains and industries prominently Logistics and retail industries. These upcoming solutions are being built with the same high standards of quality and performance that define us, and will soon be available to our beloved users at affordable, accessible pricing ensuring that excellence in software is never out of reach.
        </p>
        {/* <p>
          Today, we’re also actively working on a suite of new software as a service products spanning diverse domains and industries prominently Logistics and retail industries. These upcoming solutions are being built with the same high standards of quality and performance that define us, and will soon be available to our beloved users at affordable, accessible pricing ensuring that excellence in software is never out of reach.
        </p> */}
        <p>
        What sets us apart is not just our technology but our people. Every individual in our Terracode family has played an equal part in shaping who we are today. There is no “more” or “less” credit here only collective dedication, shared values, and a united vision. That unity has empowered us to stand strong as a trusted name in software development, known for quality, performance, and client-first solutions.
        </p>
         <p>
        As the CEO of Terracode, I write this with heartfelt pride and gratitude. I am immensely thankful for the exceptional team that drives this company forward and for the amazing clients who trust us with their digital transformation. We remain committed to innovation and service excellence and we’re only just getting started.
        </p>
         <p>
        Here’s to what we’ve built, and to the future we’re building next.
        </p>

        
      </article>
        {/* Footer */}
        <footer className="mt-10 text-neutral-300">
            <p className="text-sm">
                Nomin Sendinu Nawarathna<br/>
                CEO & Co-founder, Terracode Private Limited
            </p>
        </footer>
    </section>
    </div>
  )
}
