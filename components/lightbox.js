import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Lightbox = ({ images, currentIndex, onClose }) => {
  const router = useRouter();
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      onClose();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router, onClose]);

  const closeLightbox = () => {
    onClose();
  };

  useEffect(() => {
    // Use setTimeout to delay showing the image by 1 second (1000 milliseconds)
    const delayToShowImage = setTimeout(() => {
      setShowImage(true);
    }, 125);

    return () => {
      clearTimeout(delayToShowImage);
    };
  }, []);

  return (
    <div
      className="lightbox-overlay"
      onClick={closeLightbox}
    >
      <div className="lightbox" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={closeLightbox}>
          Close
        </button>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <div
            className={`lightbox-image ${showImage ? "show" : ""}`}
          >
            {showImage && ( // Render the image only when showImage is true
              <Image
                src={images[currentIndex].image}
                width={images[currentIndex].width * 2}
                height={images[currentIndex].height * 2}
                alt={`Lightbox Image ${currentIndex + 1}`}
                priority={false}
                onClick={closeLightbox}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
