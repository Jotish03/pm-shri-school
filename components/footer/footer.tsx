"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">
              PM Shri VCGL Senior Secondary School
            </h3>
            <p className="mb-4 text-gray-300">
              Providing quality education since 1975
            </p>
            <p className="mb-4 text-gray-300">Ravongla, South Sikkim</p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Academics",
                "Admissions",
                "Contact Us",
                "Faculty",
                "Events",
              ].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-300">
              Stay updated with our latest news and events.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Achievements</h3>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <img
                  src="/images/schoolmain.jpeg"
                  alt="School achievement"
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
                <h4 className="font-semibold text-lg mb-1 text-white">
                  National Science Olympiad Winners
                </h4>
                <p className="text-sm text-gray-300">
                  Our students secured top positions in the National Science
                  Olympiad 2024.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
        <Separator className="my-8 bg-gray-700" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-400"
        >
          <p>
            &copy; {new Date().getFullYear()} PM Shri VCGL Senior Secondary
            School. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
