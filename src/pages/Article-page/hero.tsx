
export default function Hero() {
  return (
    <div>
      <section className="container mx-auto relative w-full h-[20vh] md:h-[40vh] rounded-4xl flex items-center justify-center overflow-hidden font-lufga mt-10">
      {/* Background Image */}
      <img
        src="article/Mask group.png"
        alt="Cover"
        className="w-full h-full object-cover"
      />

      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-start text-white z-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story So Far</h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Fueled by Passion. Built for Impact.
        </p>
      </div>
    </section>  
    </div>
  )
}
