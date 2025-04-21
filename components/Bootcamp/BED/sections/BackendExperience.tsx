import React from "react";
import { Star, Briefcase, Users } from "lucide-react";
import Link from "next/link";
import { FaUsersGear } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaCode } from "react-icons/fa";

const BackendExperience = () => {
  return (
    <section
      id="backend-experience"
      className="py-12 scroll-mt-28"
      aria-labelledby="backend-experience-title"
    >
      <h2 className="text-lg md:text-3xl font-bold capitalize mb-3">
        Passionate teachers and an in-demand curriculum define the Best
        Technologies Ltd. experience
      </h2>
      <p className="text-sm md:text-base text-gray-700 mb-10">
        Our 3-month Full-Time Backend Development Immersive program offers a
        comprehensive and challenging journey for aspiring backend developers,
        designed to rapidly advance your skills and launch your career.
      </p>
      <h2
        id="backend-experience-title"
        className="text-lg md:text-3xl font-bold mb-6"
      >
        Our Academy Experience
      </h2>

      {/* First Row */}
      <div className="grid md:grid-cols-2 gap-8 gap-x-16 mb-12">
        <ExperienceCard
          icon={<Star className="h-8 w-8 text-brand-primary" />}
          title="Top-Rated Full-Time Coding Bootcamp"
          description={
            <>
              The Best Technologies Ltd. is a{" "}
              <span className="text-primary-two font-medium">highly-rated</span>{" "}
              coding school in Nigeria, and our{" "}
              <Link
                href="/trainings?scroll=student-spotlight"
                className="text-brand-primary underline font-medium"
              >
                student reviews
              </Link>{" "}
              reflect that.
            </>
          }
        />
        <ExperienceCard
          icon={<Briefcase className="h-8 w-8 text-brand-primary" />}
          title="Get 1:1 Personalized Career Coaching and Job-Search Support"
          description="Receive tailored career coaching and job search support to help you secure your ideal tech role."
        />
      </div>

      {/* Second Row */}
      <div className="grid md:grid-cols-2 gap-8 gap-x-16 mb-12">
        <ExperienceCard
          icon={<FaUsersGear className="h-8 w-8 text-brand-primary" />}
          title="Industry-Experienced Instructors"
          description="Learn from passionate programmers with tech industry experience. From large open-source libraries to quantum computer simulators, they've programmed it all."
        />
        <ExperienceCard
          icon={<IoCheckmarkDone className="h-8 w-8 text-brand-primary" />}
          title="In-Demand Curriculum"
          description="Graduate job-ready with a rigorous curriculum built by working tech practitioners and industry-experienced professionals."
        />
      </div>

      {/* Third Row */}
      <div className="grid md:grid-cols-2 gap-8 gap-x-16 mb-12">
        <ExperienceCard
          icon={<FaCode className="h-8 w-8 text-brand-primary" />}
          title="Real-World Coding Tools"
          description="Use popular developer tools like Git, GitHub, React, and VS Code. Plus, you'll learn how to integrate generative AI tech to optimize, automate, and expand your coding workflow."
        />
        <ExperienceCard
          icon={<Users className="h-8 w-8 text-brand-primary" />}
          title="Culture of Collaboration"
          description="Work with others to improve your code and learn how to present it at the same time."
        />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-16"></div>
    </section>
  );
};

const ExperienceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}) => (
  <div>
    <div className="flex flex-col items-start gap-4 mb-4">
      {icon}
      <h3 className="text-base font-semibold">{title}</h3>
    </div>
    <p className="text-gray-700 text-base leading-relaxed">{description}</p>
  </div>
);

export default BackendExperience;
