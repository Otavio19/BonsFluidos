import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-96 md:h-[500px] mb-8">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={goToPrevious}
          className="bg-white/70 hover:bg-white text-amber-800 p-2 rounded-full shadow-md transition-colors"
          aria-label="Imagem anterior"
        >
          <ChevronLeftIcon size={24} />
        </button>
        <button
          onClick={goToNext}
          className="bg-white/70 hover:bg-white text-amber-800 p-2 rounded-full shadow-md transition-colors"
          aria-label="Próxima imagem"
        >
          <ChevronRightIcon size={24} />
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-colors ${
              currentIndex === slideIndex ? 'bg-amber-600' : 'bg-white/70'
            }`}
            aria-label={`Ir para imagem ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
