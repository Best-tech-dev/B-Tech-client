"use client";

import React from "react";
import { Button } from "@/ui/Bootcamp/button";
import emailjs from "@emailjs/browser";
// import Navbar from "@/components/Bootcamp/Navbar";
// import Footer from "@/components/Bootcamp/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/Bootcamp/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/Bootcamp/form";
import { Input } from "@/ui/Bootcamp/input";
import { Textarea } from "@/ui/Bootcamp/textarea";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  middleName: z.string().optional(),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phoneNumber: z.string().min(10, "Please enter a valid phone number."),
  location: z.string().min(1, "Please select your location."),
  course: z.string().min(1, "Please select your preferred course."),
  skillLevel: z.string().min(1, "Please select your skill level."),
  enrollmentGoal: z.string().min(1, "Please select your enrollment goal."),
  educationalStatus: z
    .string()
    .min(1, "Please select your educational status."),
  referralSource: z
    .string()
    .min(5, "Please let us know how you heard about us."),
  availability: z.string().min(5, "Please let us know your availability."),
  contactMethod: z
    .string()
    .min(1, "Please select your preferred contact method."),
});

const RegistrationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      middleName: "",
      referralSource: "",
      availability: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);

    try {
      // Use your EmailJS Service ID and Template ID
      const serviceID = "service_aa9zpom";
      const templateID = "template_ter5rl4";

      // Send the email
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          first_name: values.firstName,
          middle_name: values.middleName || "", // Handle optional field
          last_name: values.lastName,
          email: values.email,
          phone_number: values.phoneNumber,
          location: values.location,
          course: values.course,
          skill_level: values.skillLevel,
          goal: values.enrollmentGoal,
          education_status: values.educationalStatus,
          how_did_you_hear: values.referralSource,
          available_for_call: values.availability,
          best_way_to_reach: values.contactMethod,
        },
        "yiLVe4RkF36NThW-L"
      );
    } catch (error) {
      console.error("Error sending email:", error);
    }

    toast({
      title: "Form submitted!",
      description:
        "One of our educational advisors will call you back shortly.",
    });
  }

  return (
    <>
      {/* <Navbar /> */}
      <main className="container mx-auto px-6 lg:px-8 py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Registration Form
          </h1>
          <p className="text-xl mb-8 text-gray-700">
            Fill in the form below to be called back by one of our educational
            advisors and join the course of your choice.
          </p>
          <p className="mb-8 text-gray-600">
            Once we receive your request, an advisor will call you back shortly
            to discuss about your project and help you find the best course
            adapted to your background and goals.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">First name*</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">First name*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your first name"
                          {...field}
                          value={field.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="middleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">Middle name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your middle name (optional)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">Last name*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your last name"
                          {...field}
                          value={field.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">Email*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email address"
                          type="email"
                          {...field}
                          value={field.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">
                        Phone number*
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your phone number"
                          type="tel"
                          {...field}
                          value={field.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">
                        Pick your location*
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your preferred location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="online">Online</SelectItem>
                          <SelectItem value="onsite">Onsite</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">
                        Choose your preferred course*
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your preferred course" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ui-ux">UI & UX</SelectItem>
                          <SelectItem value="frontend">
                            Frontend development
                          </SelectItem>
                          <SelectItem value="backend">
                            Backend development
                          </SelectItem>
                          <SelectItem value="fullstack">
                            Fullstack development
                          </SelectItem>
                          <SelectItem value="data-science">
                            Data Science
                          </SelectItem>
                          <SelectItem value="cybersecurity">
                            Cybersecurity
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="skillLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">
                        Select your skill level*
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your skill level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="basic">Basic</SelectItem>
                          <SelectItem value="intermediate">
                            Intermediate
                          </SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="enrollmentGoal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">
                      What is your goal for enrolling?*
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your goal" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="find-job">Find a job</SelectItem>
                        <SelectItem value="improve-role">
                          Improve in my current role
                        </SelectItem>
                        <SelectItem value="personal-project">
                          Launch my personal project
                        </SelectItem>
                        <SelectItem value="freelancer">
                          Become a freelancer
                        </SelectItem>
                        <SelectItem value="skills">
                          Learn practical skills to my studies
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="educationalStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">
                      Which option below best represents your educational
                      status?*
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your educational status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="high-school">
                          High School Student
                        </SelectItem>
                        <SelectItem value="higher-institution">
                          Higher Institution Student
                        </SelectItem>
                        <SelectItem value="self-employed">
                          Self-employed/freelancer
                        </SelectItem>
                        <SelectItem value="working-professional">
                          Working professional
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="referralSource"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">
                      How did you hear about us?*
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us how you discovered our bootcamp"
                        className="resize-none"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="availability"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">
                      When are you available for a call?*
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please provide your availability for a callback"
                        className="resize-none"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">
                      What is the best way to reach you?*
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your preferred contact method" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="phone">Phone call</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="bg-[#a4cd39] cursor-pointer hover:bg-[#a3cd39e6] mt-4 w-full md:w-auto"
                // disabled
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default RegistrationForm;
