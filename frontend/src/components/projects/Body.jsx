import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const baseVideos = [
  "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/7A14a071-C9c9-4Fca-Aeef-B402c6d4dc02updated.mp4?updatedAt=1774980948796",
  "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/6E36391b-C76e-49Ff-A974-33Cdb56e0f5bupdated.mp4?updatedAt=1774981424511",
  "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/7A14a071-C9c9-4Fca-Aeef-B402c6d4dc02updated.mp4?updatedAt=1774980948796",
  "https://ik.imagekit.io/bluepeakstudio/Chikoo%20Constructions/6E36391b-C76e-49Ff-A974-33Cdb56e0f5bupdated.mp4?updatedAt=1774981424511",
];

const videos = [...baseVideos, ...baseVideos, ...baseVideos];

export default function Body() {
  const [index, setIndex] = useState(baseVideos.length);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  const containerRef = useRef(null);
  const videoRefs = useRef([]);

  const CARD_WIDTH = 200;
  const GAP = 16;
  const OFFSET = CARD_WIDTH + GAP;

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // ✅ Teleport logic
  useEffect(() => {
    if (index < baseVideos.length) {
      setIsJumping(true);
      setIndex((prev) => prev + baseVideos.length);
    } else if (index >= baseVideos.length * 2) {
      setIsJumping(true);
      setIndex((prev) => prev - baseVideos.length);
    }
  }, [index]);

  useEffect(() => {
    if (isJumping) {
      // Shortest possible delay to bypass the render cycle
      const t = setTimeout(() => setIsJumping(false), 30);
      return () => clearTimeout(t);
    }
  }, [isJumping]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        if (video.paused) video.play().catch(() => {});
      } else {
        if (!video.paused) video.pause();
      }
    });
  }, [index]);

  const next = () => !isJumping && setIndex((prev) => prev + 1);
  const prev = () => !isJumping && setIndex((prev) => prev - 1);

  const handleDragEnd = (e, info) => {
    if (isJumping) return;
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };

  const centerOffset = containerWidth / 2 - CARD_WIDTH / 2;

  return (
    <div className="w-full py-24 flex flex-col items-center justify-center relative overflow-hidden bg-white">
      
      {/* Controls */}
      <div className="absolute w-full max-w-[1100px] flex justify-between px-6 z-20 pointer-events-none">
        <button 
          onClick={prev} 
          disabled={isJumping}
          className="pointer-events-auto bg-black/5 hover:bg-black/10 p-4 rounded-full backdrop-blur-sm transition-opacity disabled:opacity-0"
        >
          ←
        </button>
        <button 
          onClick={next} 
          disabled={isJumping}
          className="pointer-events-auto bg-black/5 hover:bg-black/10 p-4 rounded-full backdrop-blur-sm transition-opacity disabled:opacity-0"
        >
          →
        </button>
      </div>

      <div ref={containerRef} className="w-full max-w-[1400px] overflow-visible">
        <motion.div
          className="flex gap-4 items-center cursor-grab active:cursor-grabbing"
          drag={isJumping ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(index * OFFSET) + centerOffset }}
          transition={
            isJumping
              ? { duration: 0 } 
              : { type: "spring", stiffness: 180, damping: 24, mass: 0.8 }
          }
        >
          {videos.map((video, i) => {
            const isActive = i === index;
            const isNear = Math.abs(i - index) <= 2;

            return (
              <div key={`${i}-${video}`} className="flex-shrink-0">
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={video}
                  muted
                  loop
                  playsInline
                  preload={isNear ? "auto" : "none"}
                  className="rounded-2xl shadow-xl object-cover"
                  style={{
                    width: `${CARD_WIDTH}px`,
                    height: "360px",
                    opacity: isActive ? 1 : 0.4,
                    transform: isActive ? "scale(1.1)" : "scale(0.9)",
                    transition: isJumping ? "none" : "transform 0.5s ease, opacity 0.5s ease",
                    willChange: "transform"
                  }}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}