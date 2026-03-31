import {  VolumeXIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Pvideo = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  // Send command to YouTube iframe
  const sendCommand = (command: string) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: command,
        args: [],
      }),
      "*"
    );
  };

  // Handle unmute
  const handleUnmute = () => {
    if (!isMuted) return;

    sendCommand("unMute");
    sendCommand("playVideo");

    setIsMuted(false);
    setShowOverlay(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      sendCommand("playVideo");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-10 xl:px-64 pt-10">
      <div className="w-full mb-8 rounded-4xl overflow-hidden shadow-lg">
        
        <div className="relative w-full aspect-video bg-black">

          {/* 🎬 YouTube Video */}
          <iframe
            ref={iframeRef}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/IEBVMbrgrVo?autoplay=1&mute=1&enablejsapi=1&controls=1&rel=0&playsinline=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className={`w-full h-full object-cover ${
              isMuted ? "pointer-events-none" : "pointer-events-auto"
            }`}
          ></iframe>

          {/* 🔥 Full Click Overlay */}
          {showOverlay && (
            <div
              onClick={handleUnmute}
              className="absolute inset-0  cursor-pointer flex items-center justify-center pb-6 transition-opacity duration-500"
            >
              <div className="text-white text-sm bg-black/60 p-2 rounded-full">
                <VolumeXIcon/>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pvideo;


