"use client";

import React, { useState } from "react";
import { Button } from "@/ui/button";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/ui/dialog";

const services = [
  "Web Development",
  "Mobile App Development",
  "Digital Marketing",
  "AI & Machine Learning",
  "Digital Transformation",
  "Brand & Motion Design",
  "Other",
];

const HomepageContact = () => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    projectDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedService) {
      toast({
        title: "Service Required",
        description: "Please select a service you're interested in.",
        variant: "destructive",
      });
      return;
    }

    // Show success modal
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);

    // Reset form after modal closes
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      projectDetails: "",
    });
    setSelectedService(null);

    // Show toast notification
    toast({
      title: "Message Sent!",
      description:
        "Thank you for your inquiry. We&apos;ll get back to you within 24 hours.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="get-in-touch-form"
      className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden scroll-mt-24"
    >
      {/* Subtle SVG background */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="contactPattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M50 10 L90 50 L50 90 L10 50 Z"
                stroke="#9ef01a"
                strokeWidth="1"
                fill="none"
                opacity="0.2"
              />
              <circle cx="50" cy="50" r="2" fill="#70e000" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactPattern)" />
        </svg>
        <div className="absolute top-10 left-10 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-white">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology?
            Let&apos;s discuss your project and create something amazing
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6 text-white">
                Let&apos;s Start a Conversation
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 md:mb-8">
                Whether you&apos;re looking to modernize your existing systems,
                build something entirely new, or need strategic technology
                guidance, we&apos;re here to help. Our team of experts is ready
                to discuss your unique challenges and create tailored solutions.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base">
                    Email
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    hello@besttechnologiesltd.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base">
                    Phone
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    +234 802 532 1179
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base">
                    Location
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    The Knowledge Hub, Oke Ado, Ibadan, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-brand-primary/20">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Services Selection */}
              <div>
                <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">
                  Services
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {services.map((service) => (
                    <Button
                      key={service}
                      type="button"
                      className={`px-3 md:px-4 py-2 text-xs md:text-sm border rounded-lg transition-all duration-200 ${
                        selectedService === service
                          ? "border-brand-primary bg-brand-primary/20 text-brand-primary"
                          : "border-gray-600 bg-gray-800/50 text-gray-300 hover:border-brand-primary/50"
                      }`}
                      onClick={() => setSelectedService(service)}
                    >
                      {service}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name*"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none transition-colors duration-200 text-sm md:text-base"
                  />
                </div>

                <div>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone*"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none transition-colors duration-200 text-sm md:text-base"
                  />
                </div>
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email*"
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none transition-colors duration-200 text-sm md:text-base"
                />
              </div>

              <div>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company (optional)"
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none transition-colors duration-200 text-sm md:text-base"
                />
              </div>

              <div>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none transition-colors duration-200 resize-none text-sm md:text-base"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold py-4 md:py-6 px-6 rounded-lg hover:from-brand-primary/90 hover:to-brand-accent/90 transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <DialogTitle className="text-2xl font-bold text-white">
              Message Sent Successfully!
            </DialogTitle>
            <DialogDescription className="text-gray-300 mt-2">
              Thank you for reaching out to us. We&apos;ve received your message
              and will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6">
            <Button
              onClick={handleModalClose}
              className="w-full bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/90 hover:to-brand-accent/90 text-white font-semibold py-3 rounded-lg transition-all duration-200"
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HomepageContact;
