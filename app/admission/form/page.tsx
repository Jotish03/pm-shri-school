"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControllerRenderProps, FieldValues, useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

// Define the form schema
const formSchema = z.object({
  candidateName: z.string().min(2, {
    message: "Candidate name must be at least 2 characters.",
  }),
  fatherName: z.string().min(2, {
    message: "Father's name must be at least 2 characters.",
  }),
  motherName: z.string().min(2, {
    message: "Mother's name must be at least 2 characters.",
  }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender.",
  }),
  dateOfBirth: z.date({
    required_error: "A date of birth is required.",
  }),
  lastSchool: z.string().min(2, {
    message: "Last school attended must be at least 2 characters.",
  }),
  lastClass: z.string().min(1, {
    message: "Last class attended is required.",
  }),
  contactNumber: z.string().min(10, {
    message: "Contact number must be at least 10 digits.",
  }),
  permanentAddress: z.string().min(5, {
    message: "Permanent address must be at least 5 characters.",
  }),
  currentAddress: z.string().min(5, {
    message: "Current address must be at least 5 characters.",
  }),
  aadharNo: z.string().length(12, {
    message: "Aadhar number must be exactly 12 digits.",
  }),
  percentageObtained: z.number().min(0).max(100, {
    message: "Percentage must be between 0 and 100.",
  }),
  preferredStream: z.enum(["science", "commerce", "arts"], {
    required_error: "Please select a preferred stream.",
  }),
  isCOIHolder: z.boolean(),
  isCWSN: z.boolean(),
  disabilityPercentage: z.number().min(0).max(100).optional(),
});

// Infer the type from the schema
type FormValues = z.infer<typeof formSchema>;

const AdmissionForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      candidateName: "",
      fatherName: "",
      motherName: "",
      gender: undefined,
      dateOfBirth: undefined,
      lastSchool: "",
      lastClass: "",
      contactNumber: "",
      permanentAddress: "",
      currentAddress: "",
      aadharNo: "",
      percentageObtained: 0,
      preferredStream: undefined,
      isCOIHolder: false,
      isCWSN: false,
      disabilityPercentage: 0,
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    // Handle form submission here
  };

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-blue-600"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Admission Application
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-white shadow-lg rounded-lg p-8"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
            {step === 1 && (
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <FormField
                  control={form.control}
                  name="candidateName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Candidate Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter candidate's name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fatherName"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Father's Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter father's name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="motherName"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Mother's Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter mother's name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Gender</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem className="flex flex-col mt-4">
                      <FormLabel>Date of Birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <FormField
                  control={form.control}
                  name="lastSchool"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last School Attended</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter last school attended"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastClass"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Last Class Attended</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter last class attended"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Parents/Guardian Contact Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter contact number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="permanentAddress"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Permanent Address</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter permanent address"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="currentAddress"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Current Address</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter current address"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <FormField
                  control={form.control}
                  name="aadharNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Aadhar Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Aadhar number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="percentageObtained"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Percentage Obtained</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter percentage obtained"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preferredStream"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Preferred Stream</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select preferred stream" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="commerce">Commerce</SelectItem>
                          <SelectItem value="arts">Arts</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="isCOIHolder"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 mt-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Is applicant a COI (Certificate of Identity) holder?
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="isCWSN"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 mt-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Does applicant fall under CWSN (Children With Special
                          Needs)?
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                {form.watch("isCWSN") && (
                  <FormField
                    control={form.control}
                    name="disabilityPercentage"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel>Percentage of Disability</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter percentage of disability"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </motion.div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                  Previous
                </Button>
              )}
              {step < totalSteps && (
                <Button type="button" onClick={nextStep}>
                  Next
                </Button>
              )}
              {step === totalSteps && (
                <Button type="submit">Submit Application</Button>
              )}
            </div>
          </form>
        </Form>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mt-12 space-y-8"
      >
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Admission Guidelines</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ensure all information provided is accurate and up-to-date.</li>
            <li>Upload clear, recent passport-size photographs.</li>
            <li>
              Keep all necessary documents ready before starting the application
              process.
            </li>
            <li>
              Pay close attention to eligibility criteria for your chosen
              stream.
            </li>
            <li>
              Submit the application before the deadline to avoid any
              last-minute issues.
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Required Documents</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Birth Certificate</li>
            <li>Previous School Leaving Certificate</li>
            <li>Mark sheets of last two years</li>
            <li>Passport size photographs (recent)</li>
            <li>Aadhar Card</li>
            <li>Caste Certificate (if applicable)</li>
            <li>Disability Certificate (if applicable)</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>
            If you have any questions or need assistance with your application,
            please contact our Admissions Office:
          </p>
          <ul className="list-none space-y-2 mt-4">
            <li>
              <strong>Email:</strong> admissions@pmshrivcgl.edu.in
            </li>
            <li>
              <strong>Phone:</strong> +91 123-456-7890
            </li>
            <li>
              <strong>Address:</strong> 123 Education Street, Knowledge City,
              State - 123456
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default AdmissionForm;
