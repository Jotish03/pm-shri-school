"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ImageData {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: string;
}

// Simulated image data
const images: ImageData[] = [
  {
    id: 1,
    src: "/images/eventer.jpg",
    alt: "Gallery image 1",
    caption: "Annual school event showcasing student talents",
    category: "Events",
  },
  {
    id: 2,
    src: "/images/acafour.jpg",
    alt: "Gallery image 2",
    caption: "Students presenting innovative projects at the science fair",
    category: "Academics",
  },
  {
    id: 3,
    src: "/images/acathree.jpg",
    alt: "Gallery image 3",
    caption: "Exciting moments from our annual sports day",
    category: "Sports",
  },
  {
    id: 4,
    src: "/images/sliderthree.jpg",
    alt: "Gallery image 4",
    caption: "Creative artworks displayed at the student art exhibition",
    category: "Arts",
  },
  {
    id: 5,
    src: "/images/schoolmain.jpeg",
    alt: "Gallery image 5",
    caption: "Proud graduates at the annual graduation ceremony",
    category: "Events",
  },
  {
    id: 6,
    src: "/images/acatwo.jpg",
    alt: "Gallery image 6",
    caption: "Vibrant performances at the school's cultural fest",
    category: "Culture",
  },
  // Add more images as needed
];

const categories = Array.from(new Set(images.map((img) => img.category)));

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const openLightbox = (image: ImageData) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    setSelectedImage(images[newIndex]);
  };

  const filteredImages = filter
    ? images.filter((img) => img.category === filter)
    : images;

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Gallery
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Button
          variant={filter === null ? "default" : "outline"}
          onClick={() => setFilter(null)}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => setFilter(category)}
          >
            {category}
          </Button>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {filteredImages.map((image) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => openLightbox(image)}
            >
              <CardContent className="p-0 relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge>{image.category}</Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                  <p className="text-sm truncate">{image.caption}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full mx-4"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                onClick={closeLightbox}
              >
                <X size={24} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-gray-300"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft size={24} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-gray-300"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight size={24} />
              </Button>
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded">
                <p className="text-center">{selectedImage.caption}</p>
                <p className="text-center mt-1">
                  <Badge>{selectedImage.category}</Badge>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
