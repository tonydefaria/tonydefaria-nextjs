import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Lightbox = ({ images, currentIndex, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const router = useRouter();

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

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "Escape":
        closeLightbox();
        break;
      case "ArrowLeft":
        prevImage();
        break;
      case "ArrowRight":
        nextImage();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
    const touchXDiff = touchEndX - touchStartX;

    if (touchXDiff > 50) {
      // Swipe right, go to the previous image
      prevImage();
    } else if (touchXDiff < -50) {
      // Swipe left, go to the next image
      nextImage();
    }
  };

  return (
    <div
      className="lightbox-overlay"
      onClick={closeLightbox}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="lightbox" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={closeLightbox}>
          Close
        </button>
        <button className="lightbox-prev" onClick={prevImage} disabled={currentImageIndex === 0}>
          Prev
        </button>
        <button className="lightbox-next" onClick={nextImage} disabled={currentImageIndex === images.length - 1}>
          Next
        </button>
        <div className="lightbox-content">
          <Image
            src={images[currentImageIndex].image}
            width={images[currentImageIndex].width}
            height={images[currentImageIndex].height}
            alt={`Lightbox Image ${currentImageIndex + 1}`}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
