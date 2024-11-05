import { useState, useEffect, useCallback } from 'react';

const slides = [
  { id: 1, image: '/src/assets/perfumes.png' },
  { id: 2, image: '/src/assets/roses.png' },
  { id: 3, image: '/src/assets/forher.png' },
  { id: 4, image: '/src/assets/forhim.png' },
];

// Add duplicates for seamless looping
const duplicatedSlides = [
  slides[slides.length - 1], // Duplicate last slide
  ...slides,
  slides[0], // Duplicate first slide
];

export default function Carousel() {
  const [current, setCurrent] = useState(1); // Start at the first original slide

  const changeSlide = useCallback((direction: number) => {
    setCurrent((prev) => {
      const next = prev + direction;
      // Check if we need to jump to the first/last original slide
      if (next === 0) return slides.length; // Jump to last slide
      if (next === duplicatedSlides.length - 1) return 1; // Jump to first slide
      return next;
    });
  }, []);

  // Automatically advance slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1); // Advance right
    }, 3000);

    return () => clearInterval(interval);
  }, [changeSlide]);

  return (
    <div className="carousel overflow-hidden relative w-[90vw]  h-[60vw] sm:h-[40vw] md:h-[30vw] lg:h-[300px]">
      <div
        className="slides flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }} // Slide to the left
      >
        {duplicatedSlides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="carousel-image w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Clickable areas */}
      <div
        onClick={() => changeSlide(-1)} // Move left
        className="absolute top-0 left-0 w-1/2 h-full cursor-pointer"
      />
      <div
        onClick={() => changeSlide(1)} // Move right
        className="absolute top-0 right-0 w-1/2 h-full cursor-pointer"
      />
    </div>
  );
}
