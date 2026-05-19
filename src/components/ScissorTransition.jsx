import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScissorTransition = () => {
  const containerRef = useRef(null);
  const bottomSectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a massive scissor closing and screen slicing effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 30%",
          scrub: 1,
        }
      });

      // The scissors close
      tl.fromTo('.left-blade',
        { rotation: -45, transformOrigin: 'right bottom' },
        { rotation: 0, ease: 'power1.inOut' },
        0
      )
      .fromTo('.right-blade',
        { rotation: 45, transformOrigin: 'left bottom' },
        { rotation: 0, ease: 'power1.inOut' },
        0
      )
      // They move across slightly
      .fromTo('.scissor-group',
        { x: '-10vw', y: 0 },
        { x: '10vw', y: 0, ease: 'power1.inOut' },
        0
      )

      // Reveal mask underneath as the scissors cut
      .fromTo('.mask-reveal',
        { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', ease: 'none' },
        0
      )

      // Intense spark/light flash on the cut line
      .fromTo('.spark-line',
        { scaleX: 0, opacity: 0, x: '-50%' },
        { scaleX: 1, opacity: 1, x: '0%', ease: 'power2.out' },
        0.5
      )
      .to('.spark-line', {
        opacity: 0, duration: 0.2
      }, 0.8);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-visible z-40">

      {/* The cut effect container */}
      <div className="absolute inset-x-0 top-0 h-[2px] z-50 flex items-center">
        <div className="spark-line absolute inset-x-0 h-[4px] bg-white shadow-[0_0_30px_5px_rgba(250,204,21,1)]"></div>
        <div className="spark-line absolute inset-x-0 h-[10px] bg-brand-yellow/50 blur-md"></div>
      </div>

      {/* Massive photorealistic (SVG/CSS constructed) Scissors */}
      <div className="scissor-group absolute z-50 w-[200vw] -left-[50vw] sm:w-full sm:left-0 flex items-center justify-center -top-[100px] sm:-top-[200px] pointer-events-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transform scale-50 sm:scale-100 origin-center">
        <div className="relative w-[800px] h-[400px] flex items-center justify-center opacity-90">

            {/* Left Handle & Blade */}
            <div className="left-blade absolute flex flex-col items-end justify-end right-1/2 bottom-1/2 w-[500px]">
                <div className="relative w-[400px] h-[40px] bg-gradient-to-r from-gray-700 via-gray-400 to-gray-200 rounded-l-full rotate-[15deg] origin-right border-y border-gray-500 shadow-inner">
                   <div className="absolute top-0 right-0 w-[30px] h-full bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                </div>
                <div className="w-[80px] h-[100px] rounded-[40px] border-[15px] border-gray-600 bg-transparent shadow-[inset_0_5px_10px_rgba(0,0,0,0.8)] -mt-4 mr-[300px]"></div>
            </div>

            {/* Right Handle & Blade */}
            <div className="right-blade absolute flex flex-col items-start justify-start left-1/2 bottom-1/2 w-[500px]">
                <div className="w-[80px] h-[100px] rounded-[40px] border-[15px] border-gray-600 bg-transparent shadow-[inset_0_5px_10px_rgba(0,0,0,0.8)] -mb-4 ml-[300px]"></div>
                <div className="relative w-[400px] h-[40px] bg-gradient-to-l from-gray-700 via-gray-400 to-gray-200 rounded-r-full -rotate-[15deg] origin-left border-y border-gray-500 shadow-inner">
                   <div className="absolute top-0 left-0 w-[30px] h-full bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                </div>
            </div>

            {/* Huge Golden Screw */}
            <div className="absolute w-[30px] h-[30px] bg-gradient-to-br from-brand-yellow to-brand-orange rounded-full z-30 shadow-[inset_0_2px_5px_rgba(255,255,255,0.5),_0_5px_15px_rgba(0,0,0,0.9)] flex items-center justify-center">
               <div className="w-full h-[4px] bg-gray-900/50 rotate-45"></div>
            </div>
        </div>
      </div>

      {/*
        This div wraps the next section in the app visually,
        and we apply a mask-reveal to make it look like the scissors cut it open.
        Since we can't easily wrap App contents here, we'll just simulate the cut
        by having a dark overlay that wipes away.
      */}
      <div className="mask-reveal absolute inset-x-0 h-[200px] top-0 bg-brand-yellow/10 backdrop-blur-sm z-30 border-b border-brand-yellow/30 pointer-events-none"></div>

    </div>
  );
};

export default ScissorTransition;
