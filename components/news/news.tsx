"use client";
import React from "react";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const LatestNews = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const newsItems = [
    {
      title: "Annual Science Fair",
      date: "15th August 2024",
      description:
        "Join us for an exciting showcase of student projects and innovations.",
    },
    {
      title: "Sports Day Announcement",
      date: "5th September 2024",
      description:
        "Get ready for a day of athletic competitions and team spirit!",
    },
    {
      title: "New Computer Lab Inauguration",
      date: "1st October 2024",
      description:
        "State-of-the-art facilities to enhance digital learning experiences.",
    },
  ];

  return (
    <motion.section
      className="py-16 bg-white"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-blue-600"
          variants={fadeIn}
        >
          Latest News
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full">
                <CardContent className="pt-6 flex flex-col h-full">
                  <Newspaper className="w-12 h-12 text-blue-600 mb-4 self-center" />
                  <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                  <Badge variant="outline" className="mb-2 self-start">
                    {news.date}
                  </Badge>
                  <p className="text-gray-600 flex-grow">{news.description}</p>
                  <Button variant="outline" className="mt-4">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LatestNews;
