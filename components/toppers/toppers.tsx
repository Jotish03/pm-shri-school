"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, BarChart, Users, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Types
interface StreamData {
  stream: string;
  totalCandidates: number;
  pass: number;
  passPercentage: string;
  topper: {
    name: string;
    score: string;
  };
}

interface YearData {
  [stream: string]: StreamData;
}

interface PerformanceData {
  [year: string]: YearData;
}

interface Topper {
  name: string;
  score: string;
  stream: string;
}

interface YearlyToppersData {
  [year: string]: Topper[];
}

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// Sub-components
const StreamPerformance: React.FC<{ data: StreamData }> = ({ data }) => (
  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
    <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
      <CardTitle className="text-xl font-bold flex items-center">
        <GraduationCap className="mr-2" />
        {data.stream}
      </CardTitle>
    </CardHeader>
    <CardContent className="p-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Candidates</span>
          <Badge variant="secondary" className="text-lg">
            {data.totalCandidates}
          </Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Pass</span>
          <Badge variant="secondary" className="text-lg">
            {data.pass}
          </Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Pass %</span>
          <Badge variant="secondary" className="text-lg">
            {data.passPercentage}
          </Badge>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Stream Topper</p>
          <p className="font-semibold">{data.topper.name}</p>
          <p className="text-green-600 font-bold">{data.topper.score}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const YearlyToppers: React.FC<{ data: YearlyToppersData }> = ({ data }) => (
  <Accordion type="single" collapsible className="w-full">
    {Object.entries(data).map(([year, toppers]) => (
      <AccordionItem key={year} value={year}>
        <AccordionTrigger className="text-lg font-semibold hover:bg-gray-100 p-4 rounded-lg">
          {year}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-4 p-4">
            {toppers.map((topper, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white p-3 rounded-lg shadow"
              >
                <span className="font-medium">{topper.name}</span>
                <div>
                  <Badge variant="secondary" className="mr-2">
                    {topper.score}
                  </Badge>
                  <Badge variant="outline">{topper.stream}</Badge>
                </div>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

// Main component
const SchoolPerformanceDashboard: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2024");

  const performanceData: PerformanceData = {
    "2024": {
      humanities: {
        stream: "Humanities",
        totalCandidates: 104,
        pass: 86,
        passPercentage: "96.6%",
        topper: { name: "Rashika Rai", score: "77%" },
      },
      science: {
        stream: "Science",
        totalCandidates: 39,
        pass: 31,
        passPercentage: "90%",
        topper: { name: "Prakriti Sharma", score: "75.8%" },
      },
      commerce: {
        stream: "Commerce",
        totalCandidates: 27,
        pass: 21,
        passPercentage: "68.75%",
        topper: { name: "Ayush Pal Rai", score: "72%" },
      },
      it: {
        stream: "IT",
        totalCandidates: 24,
        pass: 20,
        passPercentage: "92.3%",
        topper: { name: "Sunil Rai", score: "68.4%" },
      },
      foodProduction: {
        stream: "Food Production",
        totalCandidates: 2,
        pass: 2,
        passPercentage: "50%",
        topper: { name: "Neeta Manger", score: "56.2%" },
      },
    },
    "2023": {
      humanities: {
        stream: "Humanities",
        totalCandidates: 104,
        pass: 86,
        passPercentage: "82.6%",
        topper: { name: "Muskan Gurung", score: "83.3%" },
      },
      science: {
        stream: "Science",
        totalCandidates: 39,
        pass: 31,
        passPercentage: "79.4%",
        topper: { name: "Bishal Chettri", score: "77.6%" },
      },
      commerce: {
        stream: "Commerce",
        totalCandidates: 27,
        pass: 21,
        passPercentage: "77.7%",
        topper: { name: "Safina Rai", score: "79.5%" },
      },
      it: {
        stream: "IT",
        totalCandidates: 24,
        pass: 20,
        passPercentage: "83.3%",
        topper: { name: "Pabitra Kami", score: "65.16%" },
      },
      foodProduction: {
        stream: "Food Production",
        totalCandidates: 2,
        pass: 2,
        passPercentage: "100%",
        topper: { name: "Samir Gurung", score: "55.5%" },
      },
    },
  };

  const yearlyToppers: YearlyToppersData = {
    "2022": [
      { name: "Supriya Kumari", score: "88.2%", stream: "Humanities" },
      { name: "Buddha Hangma", score: "88.2%", stream: "Humanities" },
      { name: "Prayash Gurung", score: "82.2%", stream: "Commerce" },
      { name: "Bishal Sharma", score: "70%", stream: "IT" },
    ],
    "2021": [
      { name: "Kidenla Sherpa", score: "83.6%", stream: "PCM" },
      { name: "Pabitra Rai", score: "82.6%", stream: "Humanities" },
      { name: "Yangchen Sherpa", score: "86.4%", stream: "IT" },
    ],
    "2020": [
      { name: "Sagar Panth", score: "78.16%", stream: "PCM" },
      { name: "Srijana Rai", score: "91.67%", stream: "Humanities" },
      { name: "Sanju Chettri", score: "79.8%", stream: "IT" },
    ],
  };

  return (
    <motion.section
      className="py-8 md:py-16 bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-blue-600"
          variants={fadeIn}
        >
          School Performance Dashboard
        </motion.h2>

        <Tabs defaultValue="performance" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="performance" className="text-sm md:text-base">
              <BarChart className="w-4 h-4 mr-2" />
              Stream Performance
            </TabsTrigger>
            <TabsTrigger value="toppers" className="text-sm md:text-base">
              <Trophy className="w-4 h-4 mr-2" />
              Yearly Toppers
            </TabsTrigger>
          </TabsList>
          <TabsContent value="performance">
            <div className="mb-6">
              <Select
                value={selectedYear}
                onValueChange={(value) => setSelectedYear(value)}
              >
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {Object.values(performanceData[selectedYear]).map(
                (stream, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <StreamPerformance data={stream} />
                  </motion.div>
                )
              )}
            </div>
          </TabsContent>
          <TabsContent value="toppers">
            <YearlyToppers data={yearlyToppers} />
          </TabsContent>
        </Tabs>

        <motion.div variants={fadeIn} className="mt-8 md:mt-12">
          <Card className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-center">
                Overall School Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl md:text-5xl font-bold">91.57%</p>
              <p className="text-lg md:text-xl mt-2">
                School Pass Percentage for 2024
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SchoolPerformanceDashboard;
