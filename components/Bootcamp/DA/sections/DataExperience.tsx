import React from "react";
import { Star, Briefcase, Users, BarChart } from "lucide-react";
import Link from "next/link";
import { FaUsersGear } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaChartBar } from "react-icons/fa";

const DataExperience = () => {
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
      id="data-experience"
      className="py-12 scroll-mt-28"
      aria-labelledby="data-experience-title"
    >
      <h2 className="text-lg md:text-3xl font-bold capitalize mb-3">
        Data science experts and comprehensive analytics curriculum define the
        Best Technologies Ltd. Data Analytics Bootcamp experience
      </h2>
      <p className="text-sm md:text-base text-gray-700 mb-10">
        Our intensive 20-week Data Analytics program combines statistical
        analysis, machine learning, and business intelligence training to
        prepare you for high-demand roles in data science and analytics.
      </p>
      <h2
        id="data-experience-title"
        className="text-lg md:text-3xl font-bold mb-6"
      >
        Our Data Analytics Academy Experience
      </h2>

      {/* First Row */}
      <div className="grid md:grid-cols-2 gap-8 gap-x-16 mb-12">
        <ExperienceCard
          icon={<Star className="h-8 w-8 text-blue-600" />}
          title="Premier Data Analytics Training"
          description={
            <>
              Best Technologies Ltd. is recognized as{" "}
              <span className="text-blue-600 font-medium">
                Nigeria&apos;s leading
              </span>{" "}
              data analytics and data science training provider, with{" "}
              <Link
                href="/trainings?scroll=student-spotlight"
                className="text-blue-600 underline font-medium"
              >
                exceptional graduate success
              </Link>{" "}
              in data roles.
            </>
          }
        />

        <ExperienceCard
          icon={<Briefcase className="h-8 w-8 text-blue-600" />}
          title="Industry-Ready Data Skills"
          description={
            <>
              Master{" "}
              <span className="text-blue-600 font-medium">
                Python, SQL, Power BI, and Machine Learning
              </span>{" "}
              through real-world projects that mirror enterprise data analytics
              workflows and business intelligence requirements.
            </>
          }
        />
      </div>

      {/* Second Row */}
      <div className="grid md:grid-cols-2 gap-8 gap-x-16 mb-12">
        <ExperienceCard
          icon={<FaUsersGear className="h-8 w-8 text-blue-600" />}
          title="Data Science Professionals"
          description={
            <>
              Learn from{" "}
              <span className="text-blue-600 font-medium">
                experienced data scientists
              </span>{" "}
              and analytics professionals from leading companies who bring
              real-world data insights and industry best practices.
            </>
          }
        />

        <ExperienceCard
          icon={<IoCheckmarkDone className="h-8 w-8 text-blue-600" />}
          title="Data Analytics Portfolio"
          description={
            <>
              Build{" "}
              <span className="text-blue-600 font-medium">
                comprehensive data projects
              </span>{" "}
              including predictive models, dashboards, and business intelligence
              solutions that showcase your analytical capabilities.
            </>
          }
        />
      </div>

      {/* Third Row */}
      <div className="grid md:grid-cols-2 gap-8 gap-x-16 mb-12">
        <ExperienceCard
          icon={<Users className="h-8 w-8 text-blue-600" />}
          title="Data Community Network"
          description={
            <>
              Join a{" "}
              <span className="text-blue-600 font-medium">
                professional data network
              </span>{" "}
              and collaborate on analytics projects that simulate real data
              science team environments and business scenarios.
            </>
          }
        />

        <ExperienceCard
          icon={<FaChartBar className="h-8 w-8 text-blue-600" />}
          title="End-to-End Analytics"
          description={
            <>
              Gain expertise in{" "}
              <span className="text-blue-600 font-medium">
                complete analytics lifecycle
              </span>{" "}
              from data collection and cleaning to modeling, visualization, and
              business insights delivery.
            </>
          }
        />
      </div>

      {/* Bottom Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
        <div className="text-center">
          <BarChart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Ready to Unlock the Power of Data?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our Data Analytics bootcamp provides comprehensive training in
            statistical analysis, machine learning, and business intelligence
            essential for modern data-driven decision making.
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

export default DataExperience;
