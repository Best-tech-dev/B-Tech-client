import React from "react";
import { Button } from "@/ui/Bootcamp/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUp,
  Mail,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="border-b border-gray-700 pb-8 mb-8">
          <h3 className="text-xl font-medium mb-6">Subscribe to emails</h3>
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <a href="/subscribe">GET THE LATEST INSIGHTS</a>
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-lg font-medium mb-4">PROGRAMS</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  Full-Time Software Engineering Bootcamp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  Part-Time Software Engineering Bootcamp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  Beginner Coding Bootcamp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  Coding Bootcamp for Women & Non-binary Students
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  AI and Machine Learning Bootcamp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  Cybersecurity Bootcamp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  Data Analytics Bootcamp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  Coding Bootcamp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">COURSES</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  No Code AI and Machine Learning Course
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  Intro to Coding
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  Bootcamp Prep
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">WHY FULLSTACK</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  Hiring Outcomes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  Fullstack Academy Reviews
                </a>
              </li>
            </ul>

            <h4 className="text-lg font-medium mt-6 mb-4">
              ADMISSIONS & EVENTS
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  Admissions Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">ABOUT US</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  About Fullstack Academy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  Team Training
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  For University Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  For Employer Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-one transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <div className="flex items-center">
            <div className="mr-4">
              <img
                src="/lovable-uploads/ebcddcbe-f924-472d-9604-df772e35a931.png"
                alt="Fullstack Academy HQ"
                className="h-12"
              />
            </div>
            <div>
              <p className="text-sm opacity-70">Fullstack Academy HQ</p>
              <p className="text-sm opacity-70">249 Smith Street PMB 3004</p>
              <p className="text-sm opacity-70">Brooklyn, NY 11231</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary-one">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-primary-one">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-primary-one">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-primary-one">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-primary-one">
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-white text-secondary p-3 rounded-full hover:bg-primary-one hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
