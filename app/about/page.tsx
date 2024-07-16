"use client";
import React from "react";
import { motion } from "framer-motion";
import { Camera, Book, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-12">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-5xl font-bold mb-2">
            PM Shri VCGL Senior Secondary School
          </h1>
          <p className="text-xl">Ravongla, South Sikkim</p>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <motion.section
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-blue-600"
            variants={fadeIn}
          >
            About Our School
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {["Our Mission", "Our Vision"].map((title, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {title === "Our Mission"
                        ? "At PM Shri VCGL Senior Secondary School, we are dedicated to fostering a love for learning, promoting academic excellence, and nurturing well-rounded individuals prepared for the challenges of the future. Our holistic approach to education ensures that students develop not only intellectually but also emotionally and socially."
                        : "We envision a future where our students become leaders, innovators, and responsible citizens who contribute positively to society. Through a blend of traditional values and modern education techniques, we aim to create a learning environment that inspires creativity, critical thinking, and a lifelong passion for knowledge."}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-blue-600"
            variants={fadeIn}
          >
            Our Facilities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="w-12 h-12 text-blue-600" />,
                title: "Modern Labs",
              },
              {
                icon: <Book className="w-12 h-12 text-blue-600" />,
                title: "Extensive Library",
              },
              {
                icon: <Users className="w-12 h-12 text-blue-600" />,
                title: "Sports Complex",
              },
              {
                icon: <Award className="w-12 h-12 text-blue-600" />,
                title: "Smart Classrooms",
              },
            ].map((facility, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {facility.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{facility.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">
            Our History
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-700 leading-relaxed">
                Founded in 1975, PM Shri VCGL Senior Secondary School has a rich
                history of serving the community of Ravongla and adapting to the
                changing needs of education over the decades. From humble
                beginnings with just a handful of students, we have grown into a
                prestigious institution known for academic excellence and
                holistic development. Our journey is marked by continuous
                improvement, dedicated educators, and countless success stories
                of our alumni who have made significant contributions in various
                fields across the globe.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-blue-600"
            variants={fadeIn}
          >
            Photo Gallery
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 1, image: "/images/sliderone.jpg" },
              { id: 2, image: "/images/slidertwo.jpg" },
              { id: 3, image: "/images/sliderthree.jpg" },
            ].map((img) => (
              <motion.div key={img.id} variants={fadeIn}>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={img.image}
                      alt={`School activity ${img}`}
                      className="w-full h-64 object-cover"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" onClick={() => router.push("gallery")}>
              View More Photos
            </Button>
          </div>
        </motion.section>
      </main>

      <footer className="bg-blue-600 text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl mb-2">
            &copy; 2024 PM Shri VCGL Senior Secondary School. All rights
            reserved.
          </p>
          <p>Ravongla, South Sikkim</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
