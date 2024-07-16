"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
}

const programs: Program[] = [
  {
    id: 1,
    title: "STEM Excellence",
    description:
      "Cutting-edge curriculum in Science, Technology, Engineering, and Mathematics.",
    image: "/images/stemi.jpg",
  },
  {
    id: 2,
    title: "Arts & Creativity",
    description:
      "Nurturing artistic talents through music, visual arts, and performing arts programs.",
    image: "/images/sliderthree.jpg",
  },
  {
    id: 3,
    title: "Global Languages",
    description:
      "Comprehensive language programs to prepare students for a globalized world.",
    image: "/images/lang.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const FeaturedPrograms: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Featured Programs
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-600"
          >
            Discover our innovative and comprehensive academic programs designed
            to nurture every student's potential.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {programs.map((program) => (
            <motion.div key={program.id} variants={itemVariants}>
              <Card className="h-full flex flex-col">
                <CardHeader className="p-0">
                  <img
                    className="h-48 w-full object-cover rounded-t-lg"
                    src={program.image}
                    alt={program.title}
                  />
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {program.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="link" asChild>
                    <Link href={`/academics#${program.id}`}>Learn more</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 text-center"
        >
          <Button asChild>
            <Link href="/academics">Explore All Programs</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
