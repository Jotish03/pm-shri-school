"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  Download,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const shikshaSaptahDays = [
  {
    day: "Monday",
    date: "July 22, 2024",
    theme: "TLM (Teaching-Learning Material) Day",
    description:
      "Encouraging teachers to showcase TLM based on local context and use it in the Teaching Learning process.",
  },
  {
    day: "Tuesday",
    date: "July 23, 2024",
    theme: "FLN Day",
    description:
      "Generating greater awareness among all stakeholders for successful implementation of NIPUN/FLN Mission.",
  },
  {
    day: "Wednesday",
    date: "July 24, 2024",
    theme: "Sports Day",
    description:
      "Organising sports competitions to highlight the significance of sports and fitness amongst learners.",
  },
  {
    day: "Thursday",
    date: "July 25, 2024",
    theme: "Cultural Day",
    description:
      "Special cultural day to be organised for inculcating a sense of unity and diversity among students.",
  },
  {
    day: "Friday",
    date: "July 26, 2024",
    theme: "Skilling and Digital Initiatives Day",
    description:
      "Recognising the changing nature of job profiles and the need for new skills and reflecting upon the Digital Initiatives for enhancing the overall classroom experiences.",
  },
  {
    day: "Saturday",
    date: "July 27, 2024",
    theme: "Eco Clubs for Mission LIFE/School Nutrition Day",
    description:
      "Establishment of new Eco clubs in schools and organising Plantation drive in schools under #Plant4Mother initiative.",
  },
  {
    day: "Sunday",
    date: "July 28, 2024",
    theme: "Community Involvement Day",
    description:
      "Fostering collaboration with local communities, SMCS, NTA/PTA, PRIs for encouraging socio-emotional well-being of students and providing an ecosystem for skill development.",
  },
];

const schoolNews = [
  {
    id: 1,
    title: "Annual Science Fair Winners Announced",
    date: "June 15, 2024",
    excerpt:
      "Congratulations to all participants and winners of this year's Annual Science Fair. The creativity and innovation displayed were truly remarkable.",
    image: "/images/science.jpg",
  },
  {
    id: 2,
    title: "New Sports Facility Opening Next Month",
    date: "July 5, 2024",
    excerpt:
      "We're excited to announce the opening of our state-of-the-art sports facility. This will provide students with even more opportunities for physical education and sports activities.",
    image: "/images/sports.jpg",
  },
  {
    id: 3,
    title: "Student Art Exhibition at Local Gallery",
    date: "August 10, 2024",
    excerpt:
      "Our talented art students will be showcasing their work at the Downtown Art Gallery from August 15-30. Don't miss this opportunity to support our young artists!",
    image: "/images/art.jpg",
  },
  {
    id: 4,
    title: "School Wins Green Initiative Award",
    date: "July 20, 2024",
    excerpt:
      "Our school's commitment to sustainability has been recognized with the prestigious Green Initiative Award. Thanks to all students and staff for their efforts in making our school more environmentally friendly.",
    image: "/images/green.jpg",
  },
];

const NewsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <motion.header
        className="text-center mb-12"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">
          School News & Events
        </h1>
        <p className="text-xl text-gray-600">
          Stay updated with the latest happenings at our school
        </p>
      </motion.header>

      <motion.section
        className="mb-12"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.div variants={fadeInUp}>
          <Card className="mb-8 border-2 border-blue-500">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-700">
                Featured: Shiksha Saptah 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Join us in celebrating 4 years of the National Education Policy
                (NEP) 2020 from July 22-28, 2024. Shiksha Saptah is a week-long
                event filled with activities, workshops, and discussions on the
                future of education in India.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="#shiksha-saptah">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Latest News
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {schoolNews.map((news) => (
              <Card key={news.id} className="flex flex-col h-full">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <p className="text-gray-600">{news.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        id="shiksha-saptah"
        className="mb-12"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Shiksha Saptah 2024
        </h2>
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="about">About & Schedule</TabsTrigger>
            <TabsTrigger value="download">Download PDF</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <motion.div variants={fadeInUp}>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-blue-700">
                    About Shiksha Saptah
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Shiksha Saptah, taking place from 22-28 July 2024, marks the
                    4th anniversary of the National Education Policy (NEP) 2020.
                    This week-long celebration aims to reflect on the
                    transformative reforms introduced by NEP 2020 and reaffirm
                    our commitment to advancing education across India.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Organized by the Ministry of Education, Govt. of India,
                    Shiksha Saptah provides a platform for learners, educators,
                    policymakers, and stakeholders to collaborate, innovate, and
                    share best practices in education.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Event Schedule
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {shikshaSaptahDays.map((day, index) => (
                  <AccordionItem key={index} value={`day-${index + 1}`}>
                    <AccordionTrigger className="text-left">
                      <div>
                        <span className="font-semibold">{day.theme}</span>
                        <p className="text-sm text-gray-500">
                          {day.day}, {day.date}
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{day.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </TabsContent>
          <TabsContent value="download">
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-blue-700">
                    Download Event Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Get all the information about Shiksha Saptah 2024 in a
                    convenient PDF format. This document includes the full
                    schedule, theme descriptions, and important details about
                    the event.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full sm:w-auto flex items-center justify-center gap-2">
                    <Download size={20} />
                    <Link
                      href={"/Shiksha_Saptah_2024.pdf"}
                      download={"/Shiksha_Saptah_2024.pdf"}
                      target="_blank"
                    >
                      Download Shiksha Saptah 2024 PDF
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="text-center"
      >
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Stay Connected
        </h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter to receive the latest news and updates
          from our school.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button>Subscribe</Button>
        </div>
      </motion.section>
    </div>
  );
};

export default NewsPage;
