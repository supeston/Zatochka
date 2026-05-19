import React, { useRef, useState, memo } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const VideoCard = memo(({ src, title }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
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
        muted={isMuted}
        playsInline
        preload="metadata"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Controls Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20">
          {isPlaying ? (
            <Pause className="w-8 h-8 text-white ml-1" />
          ) : (
            <Play className="w-8 h-8 text-white ml-1" />
          )}
        </div>
      </div>

      {/* Bottom info & mute button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between z-10">
        <div className="text-white font-medium text-sm md:text-base tracking-wide flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
          {title}
        </div>
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:border-brand-yellow hover:text-brand-yellow transition-colors text-white"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </div>
  );
});

VideoCard.displayName = 'VideoCard';

const VideoGallery = () => {
  // Use relative pathing that works correctly with Vite base path for GitHub Pages
  const basePath = import.meta.env.BASE_URL || '/';

  const videos = [
    { src: `${basePath}videos/video1.mp4`, title: 'Маникюрные' },
    { src: `${basePath}videos/video2.mp4`, title: 'Парикмахерские' },
    { src: `${basePath}videos/video3.mp4`, title: 'Ремонт' },
    { src: `${basePath}videos/video4.mp4`, title: 'Охотничьи' },
    { src: `${basePath}videos/video5.mp4`, title: 'Бытовые' },
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
            <VideoCard key={idx} src={vid.src} title={vid.title} />
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">
          Листайте вправо, чтобы увидеть больше. Нажмите для воспроизведения.
        </p>
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
