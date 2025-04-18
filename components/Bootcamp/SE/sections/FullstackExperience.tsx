import React from "react";
import { Star, Briefcase, Code, Users } from "lucide-react";

const FullstackExperience = () => {
  return (
    <section
      id="fullstack-experience"
      className="py-12 scroll-mt-28"
      aria-labelledby="fullstack-experience-title"
    >
      <h2
        id="fullstack-experience-title"
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        The Fullstack Academy Experience
      </h2>

      {/* First Row */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <ExperienceCard
          icon={<Star className="h-8 w-8 text-brand-primary" />}
          title="Top-Rated Full-Time Coding Bootcamp"
          description={
            <>
              Fullstack Academy is a{" "}
              <span className="text-primary-two font-medium">highly-rated</span>{" "}
              coding school in the US, and our{" "}
              <span className="text-primary-two font-medium">
                student reviews
              </span>{" "}
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
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <ExperienceCard
          icon={<Code className="h-8 w-8 text-brand-primary" />}
          title="Industry-Experienced Instructors"
          description="Learn from passionate programmers with tech industry experience. From large open-source libraries to quantum computer simulators, they've programmed it all."
        />
        <ExperienceCard
          icon={<Users className="h-8 w-8 text-brand-primary" />}
          title="In-Demand Curriculum"
          description="Graduate job-ready with a rigorous curriculum built by working tech practitioners and industry-experienced professionals."
        />
      </div>

      {/* Third Row */}
      <div className="grid md:grid-cols-2 gap-8">
        <ExperienceCard
          icon={<Code className="h-8 w-8 text-brand-primary" />}
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
    <div className="flex items-center gap-4 mb-4">
      {icon}
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-700 text-base leading-relaxed">{description}</p>
  </div>
);

export default FullstackExperience;
