"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-blue-600"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Contact Us
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                We'd love to hear from you. Please use the contact information
                below or fill out the form to get in touch with us.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-blue-500" />
                  <span>info@pmshrivcgl.edu.in</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-blue-500" />
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-blue-500" />
                  <span>Ravongla, South Sikkim</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your message here..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        className="mt-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Our Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.9912417769516!2d88.3540280752485!3d27.046487055442807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a51d17e352a3%3A0x68832b6bb68ac0e0!2sRavangla%2C%20Sikkim!5e0!3m2!1sen!2sin!4v1689257418099!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactPage;
