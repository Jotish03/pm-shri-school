"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Book,
  GraduationCap,
  Award,
  Users,
  Library,
  Computer,
  FlaskConical,
  Diameter,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const AcademicsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <motion.header
        className="text-center mb-12"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">
          Academics
        </h1>
        <p className="text-xl text-gray-600">
          PM Shri VCGL Senior Secondary School
        </p>
        <p className="text-md text-gray-500">Ravongla, South Sikkim</p>
      </motion.header>

      <motion.section
        className="mb-16"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Our Programs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Elementary Education", icon: Book },
            { title: "Middle School", icon: Users },
            { title: "High School", icon: GraduationCap },
            { title: "Special Education", icon: Award },
          ].map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col items-center">
                  <program.icon className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle className="text-center">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    Comprehensive curriculum tailored for student success.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mb-16"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Academic Excellence
        </h2>
        <Card className="bg-gradient-to-r from-blue-100 to-indigo-100">
          <CardContent className="p-6">
            <p className="text-lg text-gray-800 leading-relaxed">
              At PM Shri VCGL Senior Secondary School, we are committed to
              providing a challenging and supportive learning environment. Our
              diverse curriculum is designed to nurture critical thinking,
              creativity, and a lifelong love for learning. We prepare our
              students not just for academic success, but for becoming
              responsible global citizens ready to face the challenges of the
              future.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        className="mb-16"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Our Facilities
        </h2>
        <Tabs defaultValue="classrooms" className="w-full">
          <TabsList className="grid w-full h-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="classrooms">Classrooms</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
            <TabsTrigger value="labs">Labs</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
          </TabsList>
          {[
            {
              value: "classrooms",
              title: "Smart Classrooms",
              icon: Computer,
              description:
                "Interactive learning environments equipped with the latest technology.",
              image: "/images/school-group13s.jpg",
            },
            {
              value: "library",
              title: "Extensive Library",
              icon: Library,
              description:
                "A vast collection of books and digital resources for research and reading.",
              image: "/images/acafour.jpg",
            },
            {
              value: "labs",
              title: "Modern Laboratories",
              icon: FlaskConical,
              description:
                "Well-equipped science and computer labs for hands-on learning experiences.",
              image: "/images/acaone.jpg",
            },
            {
              value: "sports",
              title: "Sports Facilities",
              icon: Diameter,
              description:
                "Various sports facilities for physical education and extracurricular activities.",
              image: "/images/school-group22.jpg",
            },
          ].map((facility) => (
            <TabsContent key={facility.value} value={facility.value}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <facility.icon className="h-6 w-6 mr-2" />
                    {facility.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="rounded-lg object-cover w-full h-72"
                    />
                  </div>
                  <p className="text-gray-700">{facility.description}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </motion.section>

      <motion.section initial="initial" animate="animate" variants={fadeIn}>
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Get in Touch
        </h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg text-gray-800 mb-4">
              Interested in learning more about our academic programs? We&apos;d
              love to hear from you!
            </p>
            <Button>Contact Us</Button>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
};

export default AcademicsPage;
