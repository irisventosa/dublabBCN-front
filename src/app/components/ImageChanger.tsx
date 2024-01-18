import Image from "next/image";
import React, { useState, useEffect } from "react";

const ImageChanger = () => {
  const imageSources = [
    "/assets/sagrada-familia-barcelona.webp",
    "/assets/collserola.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageSources.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imageSources.length]);

  return (
    <div>
      <Image
        src={imageSources[currentImage]}
        className="object-cover h-[353px] w-[519px]"
        alt="Changing Image"
        width={719}
        height={53}
      />
    </div>
  );
};

export default ImageChanger;
