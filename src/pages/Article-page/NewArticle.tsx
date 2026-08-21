import { Calendar, Clock, Heart, Send, Share } from "lucide-react";
import { useState, useEffect } from "react";

interface Section {
  title?: string;
  content: string;
}

interface SidebarItem {
  id: number;
  title: string;
  date?: string;
  time?: string;
  image?: string;
  author_image?: string;
  author_name?: string;
  position?: string;
  description: string;
  comments: number;
  views: string;
  sections: Section[];
}

const articlesData: SidebarItem[] = [
  {
    id: 0, 
    title: "Our Story So Far",
    date: "2 August 2025",
    time: "10 mins read",
    image: "article/Mask group.png",
    author_image: "employee/IMG_1158.PNG",
    author_name: "Nomin Sendinu",
    position: "CEO & Co-founder, Terracode Private Limited",
    description: "Main article about AI redefining software development",
    comments: 192,
    views: "4k",
    sections: [
      {
        content: "On April 18, 2024, we began our journey as a passionate tech startup with just 7 members. Day and night, we poured our efforts into developing a SaaS product tailored for medical professionals our very first milestone. Simultaneously, we delivered outstanding software development services for over 15 businesses within just one year of operations."
      },
      {
        content: "As time progressed, so did our expertise and vision. We gradually evolved to build high-performance, next-generation ERP and CRM-like business tools—developed entirely using powerful languages such as Go (Golang) and Rust, alongside our own custom-built performance and security tools. These internal tools were crafted to ensure unmatched efficiency, speed, security, and scalability for our clients. While much of the industry remained reliant on traditional development infrastructures, we embraced innovation head-on. Integrating these advanced technologies into our development teams posed significant challenges, but our relentless commitment and adaptability made it possible."
      },
      {
        content: "Midway through our journey, we expanded our service offerings to include AI integrations and custom AI solution development, especially for clients who had already built products with us. We took pride in upgrading their infrastructure with the latest technologies, helping them unlock new business capabilities and achieve even greater impact."
      },
      {
        content: "On November 2024, we officially registered our company as a private limited company. Today, Terracode operates from our own office premises in Colombo, Sri Lanka, housing several incredible teams of developers, engineers, and innovators. Each team specializes in critical, in-demand technologies, working together to build robust software products that exceed our customers’ expectations and provide true value for their investments."
      },
      {
        content: "Today, we’re also actively working on a suite of new software as a service products spanning diverse domains and industries prominently Logistics and retail industries. These upcoming solutions are being built with the same high standards of quality and performance that define us, and will soon be available to our beloved users at affordable, accessible pricing ensuring that excellence in software is never out of reach."
      },
      {
        content: "What sets us apart is not just our technology but our people. Every individual in our Terracode family has played an equal part in shaping who we are today. There is no “more” or “less” credit here only collective dedication, shared values, and a united vision. That unity has empowered us to stand strong as a trusted name in software development, known for quality, performance, and client-first solutions."
      },
      {
        content: "As the CEO of Terracode, I write this with heartfelt pride and gratitude. I am immensely thankful for the exceptional team that drives this company forward and for the amazing clients who trust us with their digital transformation. We remain committed to innovation and service excellence and we’re only just getting started.Here’s to what we’ve built, and to the future we’re building next."
      }
    ]
  },

  {
    id: 1,
    title: "Merkor: Turning Business Data Into Clear Direction",
    date: "21 August 2026",
    time: "10 mins read",
    image: "/article/merkor.jpeg",
    author_image: "employee/IMG_1158.PNG",
    author_name: "Nomin Sendinu",
    position: "CEO & Co-founder, Terracode Private Limited",
    description: "Discover how Merkor, our innovative business intelligence tool, transforms complex data into actionable insights for smarter decision-making.",
    comments: 192,
    views: "4k",
    sections: [
      {
        content: "Every business creates valuable data every day. Sales, customers, orders, inventory, payments, returns, operations, and performance signals all carry important answers. But in most companies, those answers are hard to reach. They are often spread across different systems, hidden inside reports, locked in spreadsheets, or understood only by a few people who know where to look. This makes decision-making slower than it should be. Owners and managers may know the data exists, but still struggle to turn it into clear action."
  },
      {
        content: "Merkor is built to solve that problem."

      },
      {
        content: "Merkor is an intelligent business insight platform designed for owners, founders, and management teams who want to understand their business with more clarity and confidence. It connects with the data your company already uses and transforms it into meaningful answers, practical reports, and decision-ready recommendations. Instead of asking your team to spend hours building dashboards or manually comparing numbers, Merkor helps you ask direct business questions and receive clear explanations you can actually use."

      },
      {
        content: "The purpose of Merkor is not to overwhelm you with more charts. Its purpose is to help you understand what is happening, why it may be happening, and what deserves your attention next."

      },
      {
        content: "With Merkor, a business owner can explore questions such as: What is driving revenue this month? Which products are performing best? Where are sales slowing down? Which customers need attention? Are refunds, cancellations, or stock issues affecting growth? What risks should the team act on before they become bigger problems? These are not just technical questions. They are management questions. They affect planning, cash flow, customer relationships, operations, and daily decision-making."

      },
      {
        content: "Merkor makes these answers easier to access by translating complex business data into simple, structured insight. It helps surface trends, highlight unusual changes, identify risks, and prepare reports that can be used in meetings or reviews. The goal is to give leaders a clearer view of their company without requiring them to become data specialists."

      },
      {
        content: "A key part of Merkor is trust. Business decisions should not be based on guesses, vague summaries, or numbers that cannot be explained. Merkor is designed to work carefully with verified business information, keeping insights grounded in the data available to the company. When it provides an answer, report, or recommendation, the focus is on clarity, relevance, and reliability."

      },
      {
        content: "Merkor also helps teams move faster. Instead of waiting for manual analysis, owners and managers can ask questions in natural language and get direction in minutes. This can support monthly reviews, performance checks, customer follow-ups, inventory decisions, operational planning, and strategic conversations. It gives teams a practical way to stay close to the business, notice changes earlier, and make decisions with better context."

      },
      {
        content: "For growing companies, Merkor becomes especially valuable because complexity increases over time. More customers, more products, more transactions, more tools, and more teams can make it harder to see the full picture. Merkor acts as a layer of understanding across that complexity. It helps connect the dots between different parts of the business so leaders can see not only individual numbers, but the bigger story behind them."

      },
      {
        content: "At its core, Merkor exists to make business intelligence more human. It turns data into language, reports into decisions, and scattered information into focused direction. It supports the people responsible for making the business better by giving them a clearer, calmer, and more useful way to understand what is going on."

      },
      {
        content: "Merkor is not just a reporting tool. It is a business decision companion built to help owners and management teams see clearly, act confidently, and stay ahead of the next important move."
  }
  ]
  },


  // {

  //   id: 1,
  //   title: "Designing for Humans in an AI World",
  //   date: "2 November 2024",
  //   time: "10 days ago",
  //   image: "article/Mask group.png",
  //   author_image: "/employee/chamod.png",
  //   author_name: "chamod fernando",
  //   position: "Co-founder, Terracode Private Limited",
  //   description:
  //     "As automation rises, human-centered design matters more than ever. Here's how we balance AI logic with user empathy....",
  //   comments: 192,
  //   views: "4k",
  //   sections: [
  //     {
  //       content: "Human-centered design has never been more crucial than it is today. As artificial intelligence and automation become increasingly integral to our software solutions, we face a fundamental challenge: maintaining the human touch."
  //     },
  //     {
  //       content: "At Terracode, we approach this by embedding empathy into every aspect of our AI implementations. We prioritize intuitive interfaces, clear communication, and meaningful interactions that complement AI's computational power with human understanding."
  //     },
  //     {
  //       content: "Our research shows that users respond most positively to AI systems that recognize and adapt to human needs rather than requiring humans to adapt to rigid technological constraints. This approach has led to higher user satisfaction and adoption rates across our client projects."
  //     }
  //   ]
  // },
  // {
  //   id: 2,
  //   title: "The Future of Accessibility in Design",
  //   date: "2 September 2024",
  //   time: "20 days ago",
  //   image: "article/Mask group.png",
  //   author_image: "/employee/pasindu.png",
  //   author_name: "nimesh fernando",
  //   position: "Co-founder, Terracode Private Limited",
  //   description:
  //     "As we innovate, it's crucial to ensure that our designs are inclusive and accessible to all users, regardless of ability.....",
  //   comments: 192,
  //   views: "4k",
  //   sections: [
  //     {
  //       content: "Accessibility is no longer an afterthought but a fundamental principle of modern software design. At Terracode, we believe technology should empower everyone, regardless of their physical or cognitive abilities."
  //     },
  //     {
  //       content: "We've implemented comprehensive accessibility testing across all our projects, ensuring that our solutions meet WCAG guidelines and provide meaningful experiences for users with diverse needs."
  //     },
  //     {
  //       content: "Our recent work with adaptive interfaces has shown promising results in creating truly universal designs that adjust to individual user requirements without sacrificing aesthetics or functionality."
  //     }
  //   ]
  // },
  // {
  //   id: 3,
  //   title: "Sustainable Design Practices",
  //   date: "2 April 2024",
  //   time: "30 days ago",
  //   image: "article/Mask group.png",
  //   author_image: "/employee/manuka.png",
  //   author_name: "chamod senanayake",
  //   position: "Co-founder, Terracode Private Limited",
  //   description:
  //     "Exploring eco-friendly materials and methods in design to create a more sustainable future for industry and planet.....",
  //   comments: 192,
  //   views: "4k",
  //   sections: [
  //     {
  //       content: "Software development has an environmental impact that often goes unrecognized. From data center energy consumption to the carbon footprint of our digital products, we need to consider sustainability at every step."
  //     },
  //     {
  //       content: "At Terracode, we've implemented a series of green coding practices that optimize performance while reducing resource usage. Our cloud solutions are designed for efficiency, minimizing unnecessary processing and storage."
  //     },
  //     {
  //       content: "We also consider the lifecycle of our products, designing for longevity and adaptability rather than planned obsolescence. This approach not only benefits the environment but also provides better long-term value for our clients."
  //     }
  //   ]
  // },
  // {
  //   id: 4,
  //   title: "Embracing Diversity in Design",
  //   date: "2 February 2024",
  //   time: "2 months ago", 
  //   image: "article/Mask group.png",
  //   author_image: "/employee/navoda.png",
  //   author_name: "amila perera",
  //   position: "Co-founder, Terracode Private Limited",
  //   description:
  //     "Diversity of thought and background in design teams fosters creativity and innovation, leading to better user experiences....",
  //   comments: 192,
  //   views: "4k",
  //   sections: [
  //     {
  //       content: "Diverse teams create more innovative solutions. This isn't just a values statement—it's backed by our experience and research. When people from different backgrounds collaborate, they bring unique perspectives that challenge assumptions and lead to breakthroughs."
  //     },
  //     {
  //       content: "At Terracode, we've built a multicultural team that represents various backgrounds, experiences, and ways of thinking. This diversity has directly contributed to our ability to create software that resonates with a global audience."
  //     },
  //     {
  //       content: "Our inclusive design workshops have become a cornerstone of our development process, ensuring that multiple perspectives inform every feature we build and every interface we design."
  //     }
  //   ]
  // }
];

export default function NArticle() {
  // State to track current article
  const [currentArticle, setCurrentArticle] = useState(articlesData[0]);
  // State to manage sidebar articles
  const [sidebarArticles, setSidebarArticles] = useState<SidebarItem[]>([]);
  // Initialize sidebar articles on first render
  useEffect(() => {
    // Initially, show all articles except the main one in the sidebar
    setSidebarArticles(articlesData.filter(article => article.id !== currentArticle.id));
  }, []);

  // Function to handle clicking on "Read More"
  const handleReadMore = (articleId: number) => {
    // Find the clicked article
    const selectedArticle = articlesData.find(article => article.id === articleId);
    if (selectedArticle) {
      // Store the current article before replacing it
      const previousArticle = currentArticle;
      // Update the main article
      setCurrentArticle(selectedArticle);
      setSidebarArticles(
        articlesData
          .filter(article => article.id !== selectedArticle.id)
          .map(article => 
            article.id === previousArticle.id 
              ? previousArticle  
              : article
          ));
      // Scroll to top when changing article
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Check if there are more articles to display
  const hasMoreArticles = sidebarArticles.length > 0;

    return (
    <div className="bg-black text-white font-lufga xl:my-10 mb-20">
      {/* Main Container */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 py-12">
        
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-3xl md:text-[45px] mb-4 text-[#FDA10A]">
            {currentArticle.title}
          </h1>
          <div className="flex justify-between">
          <div className="flex items-center text-[#A4A4A4] space-x-6 ">
            <span className="flex items-center gap-3 xl:text-2xl">
              <Calendar size={22} /> {currentArticle.date}
            </span>
            <span className="flex items-center gap-3 xl:text-2xl">
              <Clock size={22} /> {currentArticle.time}
            </span>
          </div>
          <span className="flex items-center gap-3 xl:text-2xl mr-5 text-[#FDA10A]">
              <Share size={22} /> Share
          </span>
          </div>
          <img
            src={currentArticle.image}
            alt={currentArticle.title}
            className="rounded-xl w-full"
          />

          {/* Author Info */}
          <div className="flex items-center space-x-4 xl:my-16">
            <img
              src={currentArticle.author_image}
              alt="Author"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">{currentArticle.author_name}</h3>
              <p className="text-sm text-gray-400">{currentArticle.position}</p>
            </div>
          </div>

          {currentArticle.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-3xl mb-4">{section.title}</h2>
              <p className="text-[#A4A4A4] xl:text-2xl ">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Right content */}
        <div className="space-y-6 flex flex-col items-center">
          <h3 className="text-3xl text-center text-[#FDA10A]">
            More Articles
          </h3>
           {hasMoreArticles ? (
            // Display the list of articles if there are any
            sidebarArticles.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-900 p-4 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h4 className="mb-2 text-2xl text-[#FDA10A]">{item.title}</h4>
                <p className="text-[#A4A4A4] text-xl mb-3">{item.description}</p>
                <div className="flex flex-row gap-4 items-center justify-between mt-4">
                  <div className="flex flex-row gap-4 items-center justify-center ">
                    <div className="backdrop-blur-sm bg-white/10 rounded-full px-3 py-1 flex items-center gap-4">
                      <Send className="w-4 h-4"/>{item.views}
                    </div>
                    <div className="backdrop-blur-sm bg-white/10 rounded-full px-3 py-1 flex items-center gap-4">
                      <Heart className="w-4 h-4"/> {item.comments}
                    </div>
                  </div>
                  {/* Read More Arrow with Click Handler */}
                  <div 
                    className="hover:bg-white transition-colors rounded-full cursor-pointer"
                    onClick={() => handleReadMore(item.id)}
                  >
                    <img src="/Property 23.png" alt="Read More" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Display "No more articles" card when there are no additional articles
            <div className="bg-neutral-900 p-6 rounded-2xl shadow text-center w-full">
              <div className="mb-4">
                <img 
                  src="/article/no-content.png" 
                  alt="No more articles" 
                  className="w-24 h-24 mx-auto opacity-80"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <h4 className="text-2xl text-[#FDA10A] mb-3">No More Articles</h4>
              <p className="text-[#A4A4A4] text-xl mb-4">
                We're working on new content. Check back soon for more articles!
              </p>
              <div className="animate-pulse flex justify-center mt-4">
                <span className="bg-[#FDA10A]/30 text-[#FDA10A] px-4 py-2 rounded-full text-sm">
                  New articles coming soon
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}