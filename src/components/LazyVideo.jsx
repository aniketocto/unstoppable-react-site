import { useEffect, useRef } from "react";

const LazyVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement
              .play()
              .catch((err) => console.log("Autoplay blocked:", err));
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 } // play when at least 50% visible
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-full h-[95vh] relative overflow-hidden z-10" style={{
      margin: "40px auto"
    }}>
      <video
        ref={videoRef}
        className="w-full h-auto object-contain"
        preload="none"
        muted
        loop
        playsInline
      >
        <source src="video/web-video.mkv" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default LazyVideo;
