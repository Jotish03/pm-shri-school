import LatestNews from "@/components/news/news";
import UpcomingEvents from "@/components/screens/events";
import FeaturedPrograms from "@/components/screens/featured";
import Welcome from "@/components/screens/welcome";
import Hero from "@/components/slider/slider";
import SchoolToppers from "@/components/toppers/toppers";
import React from "react";

export const metadata = {
  title: "School Name - Home",
  description:
    "Welcome to School Name, where we empower minds and inspire futures.",
};

const page = () => {
  return (
    <main>
      <Hero />
      <Welcome />
      <FeaturedPrograms />

      <LatestNews />
      <UpcomingEvents />
      <SchoolToppers />
    </main>
  );
};

export default page;
