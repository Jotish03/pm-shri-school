import ConfettiAnimation from "@/components/confetti/confetti";
import LatestNews from "@/components/news/news";
import UpcomingEvents from "@/components/screens/events";
import FeaturedPrograms from "@/components/screens/featured";
import Welcome from "@/components/screens/welcome";
import Hero from "@/components/slider/slider";
import SchoolPerformanceDashboard from "@/components/toppers/toppers";
import React from "react";

const Page = () => {
  return (
    <main>
      <ConfettiAnimation />
      <Hero />
      <Welcome />
      <FeaturedPrograms />
      <LatestNews />
      <UpcomingEvents />
      <SchoolPerformanceDashboard />
    </main>
  );
};

export default Page;
