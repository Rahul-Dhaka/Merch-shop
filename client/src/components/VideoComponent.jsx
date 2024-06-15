import React, { useRef, useEffect } from 'react';

const VideoComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.controls = false; // Programmatically disable controls
    }
  }, []);

  return (
    <div className="relative w-full h-vh border-5  overflow-hidden mx-auto bg-black  ">
      <video
        ref={videoRef}
        controlsList="nodownload"
        className="w-full h-[500px] object-cover "
        autoPlay
        loop
        muted // Add this if you want the video to be muted by default
      >
        <source src="https://videos.pexels.com/video-files/3808496/3808496-hd_1280_720_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center ">
        <button className="bg-theme-primary text-white font-bold py-2 px-4  rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default VideoComponent;
