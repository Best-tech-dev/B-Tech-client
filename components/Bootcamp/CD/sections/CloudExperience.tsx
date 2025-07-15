import React from "react";
import { Star, Briefcase, Users, Cloud } from "lucide-react";
import Link from "next/link";
import { FaUsersGear } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaCloud } from "react-icons/fa";

const CloudExperience = () => {
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
      id="cloud-experience"
      className="py-12 scroll-mt-28"
      aria-labelledby="cloud-experience-title"
    >
      <h2 className="text-lg md:text-3xl font-bold capitalize mb-3">
        Industry experts and comprehensive cloud curriculum define the Best
        Technologies Ltd. Cloud & DevOps Bootcamp experience
      </h2>
      <p className="text-sm md:text-base text-gray-700 mb-10">
        Our intensive 24-week Cloud & DevOps program combines hands-on cloud
        infrastructure training with modern DevOps practices, preparing you for
        high-demand roles in cloud computing and automation.
      </p>
      <h2
        id="cloud-experience-title"
        className="text-lg md:text-3xl font-bold mb-6"
      >
        Our Cloud & DevOps Academy Experience
      </h2>

      {/* First Row */}
      <div className="grid md:grid-cols-2 gap-8 gap-x-16 mb-12">
        <ExperienceCard
          icon={<Star className="h-8 w-8 text-blue-600" />}
          title="Leading Cloud Training Institution"
          description={
            <>
              Best Technologies Ltd. is recognized as{" "}
              <span className="text-blue-600 font-medium">
                Nigeria&apos;s premier
              </span>{" "}
              cloud computing and DevOps training provider, with{" "}
              <Link
                href="/trainings?scroll=student-spotlight"
                className="text-blue-600 underline font-medium"
              >
                exceptional graduate placement rates
              </Link>{" "}
              in cloud roles.
            </>
          }
        />

        <ExperienceCard
          icon={<Briefcase className="h-8 w-8 text-blue-600" />}
          title="Enterprise-Grade Cloud Skills"
          description={
            <>
              Master{" "}
              <span className="text-blue-600 font-medium">
                AWS, Azure, Docker, and Kubernetes
              </span>{" "}
              through real-world projects that mirror enterprise cloud
              infrastructure and DevOps workflows.
            </>
          }
        />
      </div>

      {/* Second Row */}
      <div className="grid md:grid-cols-2 gap-8 gap-x-16 mb-12">
        <ExperienceCard
          icon={<FaUsersGear className="h-8 w-8 text-blue-600" />}
          title="Cloud Architecture Experts"
          description={
            <>
              Learn from{" "}
              <span className="text-blue-600 font-medium">
                certified cloud architects
              </span>{" "}
              and DevOps engineers from leading tech companies who bring
              enterprise-level cloud experience to your education.
            </>
          }
        />

        <ExperienceCard
          icon={<IoCheckmarkDone className="h-8 w-8 text-blue-600" />}
          title="Cloud Infrastructure Portfolio"
          description={
            <>
              Build{" "}
              <span className="text-blue-600 font-medium">
                production-ready cloud architectures
              </span>{" "}
              and automated CI/CD pipelines that demonstrate your expertise to
              potential employers in the cloud industry.
            </>
          }
        />
      </div>

      {/* Third Row */}
      <div className="grid md:grid-cols-2 gap-8 gap-x-16 mb-12">
        <ExperienceCard
          icon={<Users className="h-8 w-8 text-blue-600" />}
          title="DevOps Community Network"
          description={
            <>
              Connect with a{" "}
              <span className="text-blue-600 font-medium">
                professional network
              </span>{" "}
              of cloud engineers and participate in collaborative projects that
              simulate real DevOps team environments.
            </>
          }
        />

        <ExperienceCard
          icon={<FaCloud className="h-8 w-8 text-blue-600" />}
          title="Multi-Cloud Expertise"
          description={
            <>
              Gain proficiency in{" "}
              <span className="text-blue-600 font-medium">
                multiple cloud platforms
              </span>{" "}
              including AWS, Azure, and Google Cloud, making you versatile in
              the competitive cloud job market.
            </>
          }
        />
      </div>

      {/* Bottom Section */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200">
        <div className="text-center">
          <Cloud className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Ready to Architect the Future of Cloud Infrastructure?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our Cloud & DevOps bootcamp provides comprehensive training in cloud
            technologies and automation practices essential for modern IT
            infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudExperience;
