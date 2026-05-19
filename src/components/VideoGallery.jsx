import React, { useRef, useState, memo } from 'react';

const VideoCard = memo(({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="relative flex-none w-64 md:w-72 lg:w-80 h-[450px] md:h-[500px] lg:h-[550px] rounded-2xl overflow-hidden cursor-pointer group shrink-0 scroll-snap-align-center border border-white/10 hover:border-brand-yellow/50 transition-colors bg-dark-panel"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop
        muted={false}
        playsInline
        preload="metadata"
      />
    </div>
  );
});

VideoCard.displayName = 'VideoCard';

const VideoGallery = () => {
  const basePath = import.meta.env.BASE_URL || '/';

  const videos = [
    { src: `${basePath}videos/video1.mp4` },
    { src: `${basePath}videos/video2.mp4` },
    { src: `${basePath}videos/video3.mp4` },
    { src: `${basePath}videos/video4.mp4` },
    { src: `${basePath}videos/video5.mp4` },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-[#080d12] relative overflow-hidden border-t border-white/5" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-metallic tracking-wider">
            Наши работы
          </h2>
          <div className="h-1 flex-1 bg-gradient-to-r from-brand-orange/50 to-transparent rounded-full hidden sm:block"></div>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {videos.map((vid, idx) => (
            <VideoCard key={idx} src={vid.src} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scroll-snap-align-center {
          scroll-snap-align: center;
        }
      `}} />
    </section>
  );
};

export default memo(VideoGallery);
