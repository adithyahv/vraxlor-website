import { useRef, useEffect } from 'react';
import './VideoBackground.css';

const VideoBackground = ({ videoSrc = 'https://tmpfiles.org/dl/9263583/hero-video.mp4' }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force video attributes for maximum autoplay compatibility
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.volume = 0;

    // Aggressive autoplay attempt
    const tryPlay = async () => {
      try {
        // Wait a bit for video to be ready
        await new Promise(resolve => setTimeout(resolve, 100));
        await video.play();
        console.log('✅ Video playing successfully');
      } catch (error) {
        console.log('⚠️ Autoplay blocked, waiting for user interaction');
        // Play on any user interaction
        const handleInteraction = async () => {
          try {
            await video.play();
            console.log('✅ Video playing after interaction');
          } catch (e) {
            console.error('❌ Video play failed:', e);
          }
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('touchstart', handleInteraction);
          document.removeEventListener('scroll', handleInteraction);
        };
        document.addEventListener('click', handleInteraction, { once: true });
        document.addEventListener('touchstart', handleInteraction, { once: true });
        document.addEventListener('scroll', handleInteraction, { once: true, passive: true });
      }
    };

    // Multiple triggers for play
    const handleCanPlay = () => {
      console.log('📹 Video can play');
      tryPlay();
    };

    const handleLoadedData = () => {
      console.log('📦 Video loaded');
      tryPlay();
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);

    // Immediate attempt if already loaded
    if (video.readyState >= 2) {
      console.log('🚀 Video ready state:', video.readyState);
      tryPlay();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  return (
    <div className="hero-media">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        defaultMuted
        webkit-playsinline="true"
        x5-playsinline="true"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;

