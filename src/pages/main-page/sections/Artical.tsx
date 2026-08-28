import TerraButton from '@/components/button';
import { Heart, MessageCircle } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { articlesData } from '@/pages/Article-page/NewArticle';

const Articles = () => {
  const navigate = useNavigate();
  const articles = [...articlesData].reverse();
  const openArticle = (slug: string) => {
    navigate({ to: '/articles/$slug', params: { slug } });
  };

  return (

    <div className="px-4  bg-black text-white py-2 font-lufga mt-10 xl:mt-20 ">

      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 px-4 md:px-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FDA10A] font-light">
            Latest Articles & News
          </h2>
          <p className="text-[#A4A4A4] text-lg md:text-xl lg:text-2xl font-light mt-4">
            Thoughts, tips, and tech deep-dives from the minds building with AI, code, and creativity.
          </p>
        </div>

        {/* Mobile View - Horizontal Scroll */}
        <div className="block md:hidden">
          <div className="flex overflow-x-auto gap-4 px-4 pb-4 scrollbar-hide">
            {articles.map((article, index) => (
              <div 
                key={article.id} 
                onClick={() => openArticle(article.slug)}
                className={`
                  flex-shrink-0 bg-[#1A1A1A] rounded-xl p-6 text-white transition-colors duration-300 hover:bg-[#2C2C2C] cursor-pointer relative overflow-hidden flex flex-col justify-end
                  ${index === 0 ? 'w-80 min-h-[500px]' : 'w-72 min-h-[450px]'}
                `}
              >
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="absolute inset-0 w-full h-full object-cover rounded-xl" 
                />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    {article.date}
                  </span>
                </div>
                
                {/* Content */}
                <div className="z-10">
                  <h3 className={`font-light mb-3 leading-tight ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                    {article.title}
                  </h3>
                  <p className={`mb-4 ${index === 0 ? 'text-base' : 'text-sm'}`}>
                    {article.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 bg-[#141414] px-2.5 py-1 rounded-full">
                        <Heart className="w-3 h-3" />
                        <span className="text-sm">{article.comments}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#141414] px-2.5 py-1 rounded-full">
                        <MessageCircle className="w-3 h-3" />
                        <span className="text-sm">{article.views}</span>
                      </div>
                    </div>
                    {/* Read More Arrow */}
                    <div className="flex items-center justify-center hover:bg-white transition-colors rounded-full">
                      <img src="/Property 23.png" alt="Read More" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet View - Original Grid Layout */}
        <div className="hidden md:block">
          <div className="space-y-8">
            {/* First Row - 2 Articles (1 spans 2 cols, 1 spans 1 col) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* First Article - spans 2 columns */}
              <div onClick={() => openArticle(articles[0].slug)} className="md:col-span-2 bg-[#1A1A1A] rounded-xl p-8 text-white  hover:bg-[#2C2C2C] cursor-pointer relative overflow-hidden min-h-[450px] flex flex-col justify-end hover:scale-105 transition-transform duration-300">
                <img src={articles[0].image} alt={articles[0].title} className="absolute inset-0 w-full h-full object-cover rounded-xl" />
                {/* Date Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white text-black px-8 py-2 rounded-full text-xl font-medium flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    {articles[0].date}
                  </span>
                </div>
                
                {/* Content */}
                <div className="z-10">
                  <h3 className="text-2xl md:text-4xl font-light mb-4 leading-tight">{articles[0].title}</h3>
                  <p className=" md:text-xl mb-6">{articles[0].description}</p>
                  
                  {/* Stats */}
                  <div className="flex  items-center gap-6 ">
                    <div className="flex items-center gap-2 bg-[#141414] px-3 py-1 rounded-full">
                      <Heart className="w-5 h-5" />
                      <span className="font-medium">{articles[0].comments}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#141414] px-3 py-1 rounded-full">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-medium">{articles[0].views}</span>
                    </div>
                    {/* Read More Arrow */}
                    <div className="ml-auto ">
                      <div className=" flex items-center justify-center hover:bg-white transition-colors rounded-full">
                      <img src="/Property 23.png" alt="Read More" />
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Article - spans 1 column */}
              <div onClick={() => openArticle(articles[1].slug)} className="bg-[#1A1A1A] rounded-xl p-6 text-white  hover:bg-[#2C2C2C] cursor-pointer relative overflow-hidden min-h-[450px] flex flex-col justify-end hover:scale-105 transition-transform duration-300">
                <img src={articles[1].image} alt={articles[1].title} className="absolute inset-0 w-full h-full object-cover rounded-xl" />
                {/* Date Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black px-6 py-1.5 rounded-full lg:text-xl  font-medium flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    {articles[1].date}
                  </span>
                </div>
                
                {/* Content */}
                <div className="z-10">
                  <h3 className="text-2xl lg:text-4xl font-light mb-4">{articles[1].title}</h3>
                  <p className=" lg:text-xl mb-6">{articles[1].description}</p>
                  
                  {/* Stats */}
                  <div className="flex  items-center justify-between">
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                      <div className="flex items-center gap-1.5 bg-[#141414] px-3 py-1 rounded-full ">
                        <Heart className="w-4 h-4" />
                        <span>{articles[1].comments}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#141414] px-3 py-1 rounded-full">
                        <MessageCircle className="w-4 h-4" />
                        <span>{articles[1].views}</span>
                      </div>
                    </div>
                    {/* Read More Arrow */}
                    <div className=" flex items-center justify-center hover:bg-white transition-colors rounded-full">
                      <img src="/Property 23.png" alt="Read More" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - 3 Articles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              {articles.slice(2, 5).map((article) => (
                <div key={article.id} onClick={() => openArticle(article.slug)} className="bg-[#1A1A1A] h-1/2 rounded-xl p-6 text-white  hover:bg-[#2C2C2C] cursor-pointer relative overflow-hidden min-h-[450px] flex flex-col justify-end hover:scale-105 transition-transform duration-300">
                  <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover rounded-xl" />
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-black px-6 py-1.5 rounded-full lg:text-xl font-medium flex items-center gap-1.5">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      {article.date}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="z-10">
                    <h3 className="text-2xl lg:text-4xl font-light mb-4">{article.title}</h3>
                    <p className=" lg:text-xl mb-6">{article.description}</p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between ">
                      <div className="flex flex-col lg:flex-row  items-center gap-4  ">
                        <div className="flex items-center gap-1.5 bg-[#141414] px-3 py-1 rounded-full">
                          <Heart className="w-4 h-4" />
                          <span>{article.comments}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-[#141414] px-3 py-1 rounded-full">
                          <MessageCircle className="w-4 h-4" />
                          <span>{article.views}</span>
                        </div>
                      </div>
                      {/* Read More Arrow */}
                     <div className=" flex items-center justify-center hover:bg-white transition-colors rounded-full">
                      <img src="/Property 23.png" alt="Read More" />
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className='flex justify-center mt-12'>
          <TerraButton label="View All Articles" onClick={() => navigate({ to: '/articles' })} />
        </div>
      </div>

      {/* Custom scrollbar hide styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Articles;
