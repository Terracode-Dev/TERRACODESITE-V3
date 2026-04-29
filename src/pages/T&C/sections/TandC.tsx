import { Calendar} from "lucide-react";
import { useState, useEffect } from "react";
import { articlesData } from "./data";
import type{ SidebarItem } from "./data";
import { useNavigate, useSearch } from '@tanstack/react-router';

const createSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

export default function TandC() {
  const search = useSearch({ strict: false }) as { policy?: string };
  const navigate = useNavigate();

  const initialArticle = search.policy 
    ? articlesData.find(a => createSlug(a.title) === search.policy) || articlesData[0]
    : articlesData[0];

  // State to track current article
  const [currentArticle, setCurrentArticle] = useState(initialArticle);
  // State to manage sidebar articles
  const [sidebarArticles, setSidebarArticles] = useState<SidebarItem[]>([]);
  
  // Initialize and update sidebar articles when currentArticle changes
  useEffect(() => {
    setSidebarArticles(articlesData.filter(article => article.id !== currentArticle.id));
  }, [currentArticle]);

  // Sync state when URL changes (e.g. user uses back/forward buttons)
  useEffect(() => {
    if (search.policy) {
      const article = articlesData.find(a => createSlug(a.title) === search.policy);
      if (article && article.id !== currentArticle.id) {
        setCurrentArticle(article);
      }
    } else {
        if (currentArticle.id !== articlesData[0].id) {
            setCurrentArticle(articlesData[0]);
        }
    }
  }, [search.policy]);

  // Function to handle clicking on "Read More"
  const handleReadMore = (articleId: number) => {
    // Find the clicked article
    const selectedArticle = articlesData.find(article => article.id === articleId);
    if (selectedArticle) {
      // Update URL
      navigate({
        to: '/t&s',
        search: { policy: createSlug(selectedArticle.title) },
      });
      
      // Update the main article
      setCurrentArticle(selectedArticle);
      
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
          </div>
          </div>

          {currentArticle.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-3xl mb-4">{section.title}</h2>
              <p className="text-[#A4A4A4] xl:text-2xl ">{section.content}</p>
              {section.subsections && section.subsections.map((subsection, subIdx) => (
                <div key={subIdx}>
                  <h3 className="text-2xl mt-4">{subsection.subtopic}</h3>
                  <p className="text-[#A4A4A4] xl:text-xl">{subsection.subDescription}</p>
                  <p className="text-[#A4A4A4] xl:text-xl">{subsection.subDescription1}</p>
                  <p className="text-[#A4A4A4] xl:text-xl">{subsection.subDescription2}</p>
                  <p className="text-[#A4A4A4] xl:text-xl">{subsection.subDescription3}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Right content */}
        <div className="space-y-6 flex flex-col items-center">
          <h3 className="text-3xl text-center text-[#FDA10A]">
            Other Policies
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
                  {/* Read More Arrow with Click Handler */}
                  <div 
                    className= "flex hover:bg-white transition-colors rounded-full cursor-pointer"
                    onClick={() => handleReadMore(item.id)}
                  >
                    {/* <h1 className="text-[#FDA10A] px-4 py-2 rounded-full text-xl">Read More</h1> */}
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
              <h4 className="text-2xl text-[#FDA10A] mb-3">No More Policies</h4>
              <p className="text-[#A4A4A4] text-xl mb-4">
                We're working on new content. Check back soon for more policies!
              </p>
              <div className="animate-pulse flex justify-center mt-4">
                <span className="bg-[#FDA10A]/30 text-[#FDA10A] px-4 py-2 rounded-full text-sm">
                  New policies coming soon
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}