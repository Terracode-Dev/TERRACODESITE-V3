
const Pvideo = () => {
  return (
    <div className="container mx-auto px-10 xl:px-64  pt-10">
      {/* Video Section */}
      <div className="w-full mb-8 rounded-4xl overflow-hidden shadow-lg ">
        <div className="relative w-full aspect-video bg-black">
          {/* <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onError={(e) => console.error("Video failed to load:", e)}
            onCanPlay={(e) => {
              console.log("Video ready to play");
              e.currentTarget.playbackRate = 0.4;
            }}
          >
            <source src="hero/Hero.mp4" type="video/mp4" />
            <source src="hero/Hero.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video> */}

          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IEBVMbrgrVo?si=T8joaFvAAEPivs8_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen allowTransparency ></iframe>
        </div>
      </div>



    </div>
  );
};

export default Pvideo;
