"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Music, Palette, Trophy } from "lucide-react";

const Curriculum = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-blue-600"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Our Curriculum
      </motion.h1>

      <Tabs defaultValue="core" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="core">Core Subjects</TabsTrigger>
          <TabsTrigger value="electives">
            Electives & Extracurriculars
          </TabsTrigger>
        </TabsList>
        <TabsContent value="core">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2"
          >
            {[
              { title: "Mathematics", icon: <BookOpen className="h-6 w-6" /> },
              { title: "Science", icon: <BookOpen className="h-6 w-6" /> },
              {
                title: "English Language Arts",
                icon: <BookOpen className="h-6 w-6" />,
              },
              {
                title: "Social Studies",
                icon: <BookOpen className="h-6 w-6" />,
              },
            ].map((subject, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    {subject.icon}
                    <CardTitle>{subject.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Our {subject.title.toLowerCase()} curriculum is designed
                      to challenge students and prepare them for higher
                      education and future careers.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
        <TabsContent value="electives">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2"
          >
            {[
              { title: "Art & Design", icon: <Palette className="h-6 w-6" /> },
              { title: "Music", icon: <Music className="h-6 w-6" /> },
              {
                title: "Physical Education",
                icon: <Trophy className="h-6 w-6" />,
              },
              {
                title: "Computer Science",
                icon: <BookOpen className="h-6 w-6" />,
              },
            ].map((subject, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    {subject.icon}
                    <CardTitle>{subject.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Our {subject.title.toLowerCase()} program offers students
                      the opportunity to explore their interests and develop new
                      skills.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center"
      >
        <p className="text-gray-700 mb-4">
          At PM Shri VCGL Senior Secondary School, we offer a wide range of
          elective courses and extracurricular activities to provide a
          well-rounded education and cater to diverse interests and talents.
        </p>
        <p className="text-gray-700">
          Our curriculum is designed to foster critical thinking, creativity,
          and a lifelong love for learning.
        </p>
      </motion.div>
    </div>
  );
};

export default Curriculum;
