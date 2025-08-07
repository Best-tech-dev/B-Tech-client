"use client";

import React, { useState } from "react";
import { Button } from "@/ui/button";
import { Send, Loader2 } from "lucide-react";
import { contactApi, GetInTouchRequest } from "@/lib/api";
import { useApiRequest } from "@/hooks/useApiRequest";
import { SuccessModal, ErrorModal } from "@/components/ui/ApiModal";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  className?: string;
  showTitle?: boolean;
  title?: string;
  description?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  className = "",
  showTitle = true,
  title = "Send Us a Message",
  description = "Tell us about your project and we'll get back to you with a customized solution.",
}) => {
  const { toast } = useToast();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    subject: "" as GetInTouchRequest["subject"],
    proposedBudget: "" as GetInTouchRequest["proposedBudget"],
    projectTimeline: "" as GetInTouchRequest["projectTimeline"],
    projectDetails: "",
  });

  const {
    loading,
    error,
    execute: submitContactForm,
    reset,
  } = useApiRequest(contactApi.submitForm);

  const subjectOptions = [
    { value: "general_enquiry", label: "General Inquiry" },
    { value: "sales_and_partnership", label: "Sales & Partnerships" },
    { value: "technical_support", label: "Technical Support" },
    { value: "careers_and_hr", label: "Careers & HR" },
    { value: "media_and_press", label: "Media & Press" },
  ];

  const budgetOptions = [
    { value: "five_hundred_thousand", label: "₦500,000" },
    { value: "one_million", label: "₦1,000,000" },
    { value: "three_million", label: "₦3,000,000" },
    { value: "five_million", label: "₦5,000,000" },
    { value: "ten_million", label: "₦10,000,000" },
    { value: "thwenty_five_million", label: "₦25,000,000" },
    { value: "fifty_million", label: "₦50,000,000" },
    { value: "hundred_million", label: "₦100,000,000" },
  ];

  const timelineOptions = [
    { value: "asap", label: "ASAP" },
    { value: "one_to_three_months", label: "1-3 months" },
    { value: "three_to_six_months", label: "3-6 months" },
    { value: "six_to_twelve_months", label: "6-12 months" },
    { value: "flexible", label: "Flexible" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.subject) {
      toast({
        title: "Subject Required",
        description: "Please select a subject for your inquiry.",
        variant: "destructive",
      });
      return;
    }

    const requestData: GetInTouchRequest = {
      fullName: formData.fullName,
      email: formData.email,
      companyName: formData.companyName || undefined,
      phoneNumber: formData.phoneNumber,
      subject: formData.subject,
      proposedBudget: formData.proposedBudget || undefined,
      projectTimeline: formData.projectTimeline || undefined,
      projectDetails: formData.projectDetails,
    };

    const result = await submitContactForm(requestData);

    if (result?.success) {
      setShowSuccessModal(true);
    } else if (error) {
      setShowErrorModal(true);
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);

    // Reset form after success
    setFormData({
      fullName: "",
      email: "",
      companyName: "",
      phoneNumber: "",
      subject: "" as GetInTouchRequest["subject"],
      proposedBudget: "" as GetInTouchRequest["proposedBudget"],
      projectTimeline: "" as GetInTouchRequest["projectTimeline"],
      projectDetails: "",
    });
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
    if (formData.subject) {
      const requestData: GetInTouchRequest = {
        fullName: formData.fullName,
        email: formData.email,
        companyName: formData.companyName || undefined,
        phoneNumber: formData.phoneNumber,
        subject: formData.subject,
        proposedBudget: formData.proposedBudget || undefined,
        projectTimeline: formData.projectTimeline || undefined,
        projectDetails: formData.projectDetails,
      };
      submitContactForm(requestData);
    }
  };

  return (
    <div className={className}>
      {showTitle && (
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-white">{title}</h2>
          <p className="text-xl text-gray-300">{description}</p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-brand-primary mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-brand-primary mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-semibold text-brand-primary mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold text-brand-primary mb-2"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="+234 (000) 123-4567"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-brand-primary mb-2"
            >
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">Select a subject</option>
              {subjectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="proposedBudget"
              className="block text-sm font-semibold text-brand-primary mb-2"
            >
              Project Budget
            </label>
            <select
              id="proposedBudget"
              name="proposedBudget"
              value={formData.proposedBudget}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">Select budget range</option>
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-8">
          <label
            htmlFor="projectTimeline"
            className="block text-sm font-semibold text-brand-primary mb-2"
          >
            Project Timeline
          </label>
          <select
            id="projectTimeline"
            name="projectTimeline"
            value={formData.projectTimeline}
            onChange={handleInputChange}
            disabled={loading}
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="">Select timeline</option>
            {timelineOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-8">
          <label
            htmlFor="projectDetails"
            className="block text-sm font-semibold text-brand-primary mb-2"
          >
            Project Details *
          </label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            rows={6}
            required
            value={formData.projectDetails}
            onChange={handleInputChange}
            disabled={loading}
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Tell us about your project, goals, and any specific requirements..."
          />
        </div>

        <Button
          type="submit"
          disabled={loading || !formData.subject}
          className="w-full bg-brand-primary text-white py-6 rounded-md font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/40 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>

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
          error?.message ||
          "Something went wrong while sending your message. Please try again."
        }
      />
    </div>
  );
};

export default ContactForm;
