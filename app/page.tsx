import UpcomingEvents from "@/components/screens/events";
import FeaturedPrograms from "@/components/screens/featured";
import Welcome from "@/components/screens/welcome";
import Hero from "@/components/slider/slider";
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
      <UpcomingEvents />
    </main>
  );
};

export default page;
