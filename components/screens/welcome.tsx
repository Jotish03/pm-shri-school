"use client";
import React, { useCallback } from "react";
import { motion, Variants } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Welcome: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.section
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
              Welcome to
            </h2>
            <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              PM Shri VCGL Senior Secondary School
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Empowering minds, inspiring futures, and nurturing excellence in
              education since 1975.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
          >
            {[
              {
                title: "Global Perspective",
                description:
                  "We prepare our students to be global citizens, ready to take on the challenges of an interconnected world.",
                icon: (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                ),
              },
              {
                title: "Innovation-Driven",
                description:
                  "Our curriculum embraces cutting-edge technology and innovative teaching methods to foster creativity and critical thinking.",
                icon: (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                title: "Inclusive Community",
                description:
                  "We celebrate diversity and create an inclusive environment where every student feels valued and supported.",
                icon: (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "State-of-the-Art Facilities",
                description:
                  "Our campus boasts modern classrooms, well-equipped laboratories, and extensive sports facilities to support holistic development.",
                icon: (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-4">
                      {item.icon}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="py-16 bg-gray-100" variants={itemVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Discover Our School
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Experience the vibrant learning environment at PM Shri VCGL Senior
              Secondary School.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="relative">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {[
                  {
                    title: "Academic Excellence",
                    description:
                      "Our rigorous curriculum and dedicated faculty ensure that students achieve their fullest potential.",
                    image: "/images/acaone.jpg",
                  },
                  {
                    title: "Extracurricular Activities",
                    description:
                      "We offer a wide range of clubs and activities to nurture diverse talents and interests.",
                    image: "/images/acatwo.jpg",
                  },
                  {
                    title: "Community Engagement",
                    description:
                      "Students participate in various community service projects, fostering social responsibility.",
                    image: "/images/acathree.jpg",
                  },
                  {
                    title: "Sports and Athletics",
                    description:
                      "Our state-of-the-art sports facilities encourage students to excel in various athletic pursuits.",
                    image: "/images/acafour.jpg",
                  },
                  {
                    title: "Arts and Culture",
                    description:
                      "We nurture creativity through a rich program of visual and performing arts.",
                    image: "/images/acafive.jpg",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="embla__slide flex-[0_0_100%] min-w-0 px-4"
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 sm:h-64 object-cover"
                      />
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <CardDescription>{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-100 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-100 to-transparent" />
            </div>
            <Button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 text-primary hover:bg-white"
              size="icon"
              variant="outline"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 text-primary hover:bg-white"
              size="icon"
              variant="outline"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </motion.div>

          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary-dark transition-colors duration-300"
            >
              Schedule a Visit
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Welcome;
