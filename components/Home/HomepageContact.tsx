"use client";

import React, { useState } from "react";
import { Button } from "@/ui/button";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/ui/dialog";
import { contactApi, GetInTouchRequest } from "@/lib/api";
import { useApiRequest } from "@/hooks/useApiRequest";
import { SuccessModal, ErrorModal } from "@/components/ui/ApiModal";

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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    projectDetails: "",
  });

  const {
    loading,
    error,
    execute: submitContactForm,
    reset,
  } = useApiRequest(contactApi.submitForm);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedService) {
      toast({
        title: "Service Required",
        description: "Please select a service you're interested in.",
        variant: "destructive",
      });
      return;
    }

    const requestData: GetInTouchRequest = {
      ...formData,
      service: selectedService,
    };

    const result = await submitContactForm(requestData);

    if (result?.success) {
      setShowSuccessModal(true);
    } else if (error) {
      setShowErrorModal(true);
    }
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

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);

    // Reset form after success
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      projectDetails: "",
    });
    setSelectedService(null);
    reset();

    // Show toast notification
    toast({
      title: "Message Sent!",
      description:
        "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
  };

  const handleErrorModalClose = () => {
    setShowErrorModal(false);
    reset();
  };

  const handleRetry = () => {
    setShowErrorModal(false);
    reset();
    // Re-trigger form submission
    if (selectedService) {
      const requestData: GetInTouchRequest = {
        ...formData,
        service: selectedService,
      };
      submitContactForm(requestData);
    }
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
      {/* Background Map (Non-interactive) */}
      <div className="absolute inset-0 opacity-30">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.805499030344!2d3.8810453!3d7.375684000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d0077b1027d%3A0x4a95bd932a3471d!2sThe%20knowledge%20hub!5e0!3m2!1sen!2sng!4v1752160191493!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/50 to-gray-900/60"></div>
      </div>

      {/* Subtle SVG background overlay */}
      <div className="absolute inset-0 z-10">
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
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

      <div className="max-w-7xl mx-auto relative z-20">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:items-stretch">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8 flex flex-col">
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

            {/* Interactive Map */}
            <div className="flex-1 mt-6 md:mt-8">
              <div className="relative rounded-xl overflow-hidden border border-brand-primary/20 hover:border-brand-primary/40 transition-colors duration-300 group h-full min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.805499030344!2d3.8810453!3d7.375684000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d0077b1027d%3A0x4a95bd932a3471d!2sThe%20knowledge%20hub!5e0!3m2!1sen!2sng!4v1752160191493!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full transition-all duration-300 group-hover:scale-105"
                />
                <a
                  href="https://maps.app.goo.gl/5bEbmmjPmwd8xr148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-transparent hover:bg-brand-primary/10 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100"
                >
                  <div className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                    Open in Google Maps
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-brand-primary/20 flex flex-col">
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
                      disabled={loading}
                      className={`px-3 md:px-4 py-2 text-xs md:text-sm border rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
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
                    disabled={loading}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none transition-colors duration-200 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone*"
                    required
                    disabled={loading}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none transition-colors duration-200 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={loading}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none transition-colors duration-200 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company (optional)"
                  disabled={loading}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none transition-colors duration-200 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  disabled={loading}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none transition-colors duration-200 resize-none text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={loading || !selectedService}
                className="w-full bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold py-4 md:py-6 px-6 rounded-lg hover:from-brand-primary/90 hover:to-brand-accent/90 transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleSuccessModalClose}
        title="Message Sent Successfully!"
        description="Thank you for reaching out to us. We've received your message and will get back to you within 24 hours."
      />

      {/* Error Modal */}
      <ErrorModal
        isOpen={showErrorModal}
        onClose={handleErrorModalClose}
        onRetry={handleRetry}
        retryLabel="Try Again"
        title="Message Failed to Send"
        description={
          error ||
          "Something went wrong while sending your message. Please try again."
        }
      />

      {/* Legacy Success Modal - Keep for backward compatibility if needed */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-white border-gray-700 text-black max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-gray-900 text-center">
              Message Sent Successfully!
            </DialogTitle>
            <DialogDescription className="text-gray-700 mt-2 text-center">
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
