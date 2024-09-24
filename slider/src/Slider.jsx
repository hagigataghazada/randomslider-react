import React, { useEffect, useState } from "react";

const images = [
  "https://picsum.photos/500/600?random=1",
  "https://picsum.photos/500/600?random=2",
  "https://picsum.photos/500/600?random=3",
  "https://picsum.photos/500/600?random=4",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stopImage, setStopImage] = useState(false);

  useEffect(() => {
    let interval;
    if(!stopImage) {
        interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
          }, 3000);
    }
    return () => clearInterval(interval);
  }, [stopImage]);

  const handlePrev = () => {
    setStopImage(true);
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  const handleNext = () => {
    setStopImage(true);
    setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  };


  return (
    <div className="flex flex-col justify-center items-center">
      <img src={images[currentIndex]} alt="" className="rounded" style={{width: "70%"}}/>
      <div className="mt-4 flex gap-2">
        <button onClick={handlePrev} className="px-4 py-2 bg-blue-500 text-white rounded">Prev</button>
        <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
      </div>
    </div>
  );
};

export default Slider;
