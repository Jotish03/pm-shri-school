"use client";
import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SchoolToppers = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const schoolToppers = [
    { name: "Aarav Sharma", class: "12th", score: "98.5%", subject: "Science" },
    {
      name: "Priya Patel",
      class: "10th",
      score: "97.8%",
      subject: "Mathematics",
    },
    { name: "Rahul Singh", class: "12th", score: "99.2%", subject: "Commerce" },
    { name: "Ananya Gupta", class: "10th", score: "96.5%", subject: "English" },
  ];

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-blue-600"
          variants={fadeIn}
        >
          School Toppers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {schoolToppers.map((topper, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full">
                <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                  <Trophy className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{topper.name}</h3>
                  <Badge variant="secondary" className="mb-2">
                    {topper.class} Class
                  </Badge>
                  <p className="text-gray-600">
                    {topper.score} in {topper.subject}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SchoolToppers;
