"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    title: "Reputable Tutors & Mentors",
    description: [
      "Our tutors aren't just good — they're actively working in the industry. From engineers at top startups to freelancers with global clients, they bring real-world experience into the classroom.",
      "More importantly, they care. They're available to explain, challenge, and guide you every step of the way.",
    ],
    image: "/imgs/reputable-tutors.avif",
  },
  {
    title: "Intensive Bootcamps with Modern Facilities",
    description: [
      "Our physical Bootcamps are hosted in a modern, tech-enabled environment designed for serious learning. Think of collaborative spaces, fast internet, dual monitors, power backup, and lunch stations — all curated for immersive learning.",
      "You don't just learn. You become part of a vibrant tech community driven by innovation, mentorship, and daily accountability.",
    ],
    image: "/imgs/bootcamp.avif",
  },
  {
    title: "Tailored Online Courses",
    description: [
      "Our online courses are not just a copy-paste of random content. They are intentionally curated, locally relevant, and globally aligned. We understand the gaps in traditional education and have designed every course to bridge them effectively.",
      "Whether you're a complete beginner or looking to upgrade your skills, our self-paced, project-based approach ensures that you learn by doing — at your own speed, with the support you need.",
    ],
    image: "/imgs/online-courses.avif",
  },
  {
    title: "Verified Certification Credentials",
    description: [
      "We provide industry-recognized certifications that validate your acquired skills and knowledge. These credentials aren't just a piece of paper; they're a testament to your hard work and proficiency, easily verifiable by employers and professional networks.",
      "Your certification serves as enduring proof of your capabilities, enhancing your career prospects and demonstrating a commitment to lifelong learning.",
    ],
    image: "/imgs/proved-certification.avif",
  },
  {
    title: "Free Resources That Empower",
    description: [
      "We believe in democratizing access to quality learning. That's why we offer a vast library of free resources, including PDF guides, cheat sheets, recorded sessions, mini-project templates, and in-house mini library — all to keep your learning journey seamless.",
      "No sign-up traps. No gatekeeping. Just pure value you can use right away, whether you're taking one of our programs or not.",
    ],
    image: "/imgs/free-resources.avif",
  },
  {
    title: "24/7 Learner Support",
    description: [
      "You're never alone. Whether it's tech support, assignment reviews, or career guidance, our team is available round the clock to respond to your needs.",
      "We've built a system that combines automation with real human interaction — so you always feel seen, supported, and encouraged to keep going.",
    ],
    image: "/imgs/learner-support.avif",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white text-[#161a25] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent bg-clip-text text-transparent">
              Best Technologies Ltd?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re not just another training provider. We&apos;re your
            partners in transformation,
            <br className="hidden sm:block" /> committed to your success every
            step of the way.
          </p>
        </div>

        <div className="space-y-20">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="flex-1 w-full max-w-lg">
                <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.description.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-gray-600 text-base sm:text-lg leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
