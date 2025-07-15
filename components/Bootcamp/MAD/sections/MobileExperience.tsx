import React from "react";
import { Star, Briefcase, Users, Smartphone } from "lucide-react";
import Link from "next/link";
import { FaUsersGear } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaMobile } from "react-icons/fa";

const MobileExperience = () => {
  const ExperienceCard = ({
    icon,
    title,
    description,
  }: {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
  }) => (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-700 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );

  return (
    <section
      id="mobile-experience"
      className="py-12 scroll-mt-28"
      aria-labelledby="mobile-experience-title"
    >
      <h2 className="text-lg md:text-3xl font-bold capitalize mb-3">
        Expert instructors and cutting-edge mobile development curriculum define
        the Best Technologies Ltd. Mobile App Bootcamp experience
      </h2>
      <p className="text-sm md:text-base text-gray-700 mb-10">
        Our comprehensive 24-week Mobile App Development program offers
        intensive training in cross-platform and native mobile development,
        designed to transform you into a skilled mobile developer ready for the
        industry.
      </p>
      <h2
        id="mobile-experience-title"
        className="text-lg md:text-3xl font-bold mb-6"
      >
        Our Mobile Development Academy Experience
      </h2>

      {/* First Row */}
      <div className="grid md:grid-cols-2 gap-8 gap-x-16 mb-12">
        <ExperienceCard
          icon={<Star className="h-8 w-8 text-green-600" />}
          title="Nigeria's Premier Mobile App Development Bootcamp"
          description={
            <>
              Best Technologies Ltd. is the{" "}
              <span className="text-green-600 font-medium">leading</span> mobile
              development training institution in Nigeria, with{" "}
              <Link
                href="/trainings?scroll=student-spotlight"
                className="text-green-600 underline font-medium"
              >
                outstanding student success stories
              </Link>{" "}
              in mobile app development.
            </>
          }
        />

        <ExperienceCard
          icon={<Briefcase className="h-8 w-8 text-green-600" />}
          title="Industry-Relevant Mobile Skills"
          description={
            <>
              Learn{" "}
              <span className="text-green-600 font-medium">
                React Native, Flutter, iOS, and Android
              </span>{" "}
              development with hands-on projects that prepare you for real-world
              mobile app development challenges.
            </>
          }
        />
      </div>

      {/* Second Row */}
      <div className="grid md:grid-cols-2 gap-8 gap-x-16 mb-12">
        <ExperienceCard
          icon={<FaUsersGear className="h-8 w-8 text-green-600" />}
          title="Expert Mobile Development Instructors"
          description={
            <>
              Our instructors are{" "}
              <span className="text-green-600 font-medium">
                experienced mobile developers
              </span>{" "}
              from top tech companies who bring real-world mobile app
              development experience directly to your learning journey.
            </>
          }
        />

        <ExperienceCard
          icon={<IoCheckmarkDone className="h-8 w-8 text-green-600" />}
          title="Mobile App Portfolio Development"
          description={
            <>
              Build{" "}
              <span className="text-green-600 font-medium">
                5+ production-ready mobile applications
              </span>{" "}
              across different platforms including iOS, Android, and
              cross-platform solutions to showcase your mobile development
              skills.
            </>
          }
        />
      </div>

      {/* Third Row */}
      <div className="grid md:grid-cols-2 gap-8 gap-x-16 mb-12">
        <ExperienceCard
          icon={<Users className="h-8 w-8 text-green-600" />}
          title="Mobile Development Community"
          description={
            <>
              Join a{" "}
              <span className="text-green-600 font-medium">
                supportive community
              </span>{" "}
              of mobile developers and collaborate on cross-platform projects
              that simulate real mobile development team environments.
            </>
          }
        />

        <ExperienceCard
          icon={<FaMobile className="h-8 w-8 text-green-600" />}
          title="Cross-Platform Expertise"
          description={
            <>
              Master both{" "}
              <span className="text-green-600 font-medium">
                native and cross-platform
              </span>{" "}
              mobile development approaches, giving you versatility in the
              mobile app development job market.
            </>
          }
        />
      </div>

      {/* Bottom Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
        <div className="text-center">
          <Smartphone className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Ready to Build the Next Generation of Mobile Apps?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our Mobile App Development bootcamp combines intensive technical
            training with real-world project experience to prepare you for a
            successful career in mobile development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Apply Now
            </button>
            <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileExperience;
