"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const sliderImages = [
  {
    src: "/images/school-group9.jpg",
    alt: "School Track and Field",
    caption: "Running Towards Success",
    description: "Fostering a culture of fitness and perseverance on the track",
  },
  {
    src: "/images/school-group1.jpg",
    alt: "Students in Classroom",
    caption: "Quality Education for All",
    description: "Providing equal opportunities for every student to excel",
  },
  {
    src: "/images/sliderthree.jpg",
    alt: "Sports Facilities",
    caption: "Nurturing Talents",
    description:
      "Developing well-rounded individuals through diverse activities",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative  h-[calc(80vh-64px)]  w-full overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={sliderImages[currentIndex].src}
            alt={sliderImages[currentIndex].alt}
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {sliderImages[currentIndex].caption}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            {sliderImages[currentIndex].description}
          </p>
          <Button
            variant="default"
            size="lg"
            className="font-semibold bg-white text-black"
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-2 sm:space-x-4">
        <Button
          variant="outline"
          size="icon"
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
        onClick={togglePlayPause}
      >
        {isPlaying ? (
          <Pause className="h-6 w-6" />
        ) : (
          <Play className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default Hero;
