"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FileText, Users, PenTool, Award, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Admission = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const admissionSteps = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Submit an application form",
      description:
        "Fill out our comprehensive online application form with all required information.",
      link: "/admission/form",
    },

    {
      icon: <Users className="h-6 w-6" />,
      title: "Provide required documents",
      description:
        "Submit necessary documents such as previous academic records, birth certificate, and identification.",
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Attend an interview (if applicable)",
      description:
        "Some programs may require an interview to assess the applicants suitability and motivation.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Complete entrance exams (if required)",
      description:
        "Certain courses may have entrance exams to evaluate the applicants academic readiness.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-blue-600"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Admission Information
      </motion.h1>

      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Admission Process</CardTitle>
            <CardDescription>
              Follow these steps to apply for admission to PM Shri VCGL Senior
              Secondary School
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {admissionSteps.map((step, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-4">
                        {step.icon}
                        <span>{step.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      {step.description}{" "}
                      {step.link && (
                        <Link className="text-blue-500" href={step.link}>
                          Click here
                        </Link>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <motion.div variants={fadeIn}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Contact Admissions Office
              </CardTitle>
              <CardDescription>
                Get in touch with us for more information about the admission
                process
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <p>Email: admissions@pmshrivcgl.edu.in</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <p>Phone: (123) 456-7890</p>
              </div>
              <Button className="mt-4">Download Application Form</Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn} className="text-center">
          <p className="text-gray-700">
            We look forward to welcoming new students to our school community.
            If you have any questions about the admission process, please dont
            hesitate to contact our admissions office.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Admission;
