const images = [
  { src: 'team/IMG_5893 1.png', className: 'col-start-1 col-span-4 row-start-1 row-span-4' },
  { src: 'team/WhatsApp Image 2025-05-06 at 9.46.58 AM 1.png', className: 'col-start-5 col-span-4 row-start-1 row-span-4' },
  { src: 'team/IMG_0412 1.png', className: 'col-start-9 col-span-4 row-start-1 row-span-4' },
  { src: 'team/IMG_0999.png', className: 'col-start-1 col-span-3 row-start-5 row-span-3' },
  { src: 'team/IMG_4695 1.png', className: 'col-start-4 col-span-6 row-start-5 row-span-5' },
  { src: 'team/IMG_1373 1.png', className: 'col-start-10 col-span-3 row-start-5 row-span-5' },
  { src: 'team/IMG_6499 1.png', className: 'col-start-1 col-span-3 row-start-8 row-span-5' },
  { src: 'team/IMG_2808 1.png', className: 'col-start-4 col-span-3 row-start-10 row-span-3' },
  { src: 'team/IMG_0705 1.png', className: 'col-start-7 col-span-3 row-start-10 row-span-3' },
  { src: 'team/IMG_6416 1.png', className: 'col-start-10 col-span-3 row-start-10 row-span-3' },
];

export const BehindTheScenes = () => {
  return (
    <div className="bg-black text-white py-12 container mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-[#FDA10A] text-6xl font-light mb-2">Behind the Scenes</h2>
        <p className="text-2xl font-extralight text-neutral-400 ">Want to see the real us?</p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-12 grid-rows-12 gap-3 max-w-7xl mx-auto h-[800px]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`${img.className} overflow-hidden rounded-lg`}
          >
            <img 
              src={img.src} 
              alt={`Behind the scenes ${index + 1}`} 
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300" 
            />
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="grid md:hidden grid-cols-2 gap-3 max-w-xl mx-auto">
        {images.map((img, index) => (
          <div key={index} className="rounded-lg overflow-hidden aspect-square">
            <img 
              src={img.src} 
              alt={`Behind the scenes mobile ${index + 1}`} 
              className="w-full h-full object-cover rounded-lg" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};