"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  Search,
  Filter,
  ChevronDown,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } },
};

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Annual Science Fair",
    date: "May 15, 2024",
    time: "9:00 AM - 3:00 PM",
    location: "School Gymnasium",
    category: "Academic",
    image: "/api/placeholder/800/400?text=Science+Fair",
  },
  {
    id: 2,
    title: "Parent-Teacher Conference",
    date: "June 5-6, 2024",
    time: "By Appointment",
    location: "Classrooms",
    category: "Community",
    image: "/api/placeholder/800/400?text=Parent-Teacher+Conference",
  },
  {
    id: 3,
    title: "Summer Sports Camp",
    date: "July 10-24, 2024",
    time: "8:00 AM - 2:00 PM",
    location: "School Sports Complex",
    category: "Sports",
    image: "/api/placeholder/800/400?text=Sports+Camp",
  },
  {
    id: 4,
    title: "Art Exhibition",
    date: "August 5, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "School Auditorium",
    category: "Cultural",
    image: "/api/placeholder/800/400?text=Art+Exhibition",
  },
  {
    id: 5,
    title: "Career Day",
    date: "September 15, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Main Hall",
    category: "Career",
    image: "/api/placeholder/800/400?text=Career+Day",
  },
];

const EventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter(
          (event) => event.category.toLowerCase() === selectedCategory
        );

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <motion.header
        className="text-center mb-12"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">
          School Events
        </h1>
        <p className="text-xl text-gray-600">
          Join us in celebrating learning, community, and achievement
        </p>
      </motion.header>

      <motion.section
        className="mb-12"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search events..."
              className="pl-10 w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filter Events
          </Button>
        </motion.div>

        <div className="mb-6">
          <Select
            value={selectedCategory}
            onValueChange={(value: any) => setSelectedCategory(value)}
          >
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="academic">Academic</SelectItem>
              <SelectItem value="cultural">Cultural</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
              <SelectItem value="community">Community</SelectItem>
              <SelectItem value="career">Career</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <EventGrid events={filteredEvents} />
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="text-center"
      >
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Stay Updated
        </h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter to receive the latest updates on school
          events.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Input
            type="email"
            placeholder="Enter your email"
            className="max-w-xs"
          />
          <Button>Subscribe</Button>
        </div>
      </motion.section>
    </div>
  );
};

interface EventGridProps {
  events: Event[];
}

const EventGrid: React.FC<EventGridProps> = ({ events }) => (
  <motion.div
    variants={staggerChildren}
    initial="initial"
    animate="animate"
    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
  >
    {events.map((event) => (
      <motion.div key={event.id} variants={fadeInUp}>
        <Card className="h-full flex flex-col overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">
              {event.title}
            </CardTitle>
            <Badge>{event.category}</Badge>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2 text-primary" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-2 text-primary" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-2 text-primary" />
                <span>{event.location}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href={`/events/${event.id}`}>Learn more</Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    ))}
  </motion.div>
);

export default EventsPage;
