import React from "react";
import {
  Briefcase,
  Users,
  FileText,
  Award,
  TrendingUp,
  Target,
} from "lucide-react";

const CareerPrep: React.FC = () => {
  const careerServices = [
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Resume & Portfolio Building",
      description:
        "Create compelling resumes and portfolios that showcase your growth marketing skills",
      features: [
        "Growth marketing resume templates",
        "Portfolio website creation",
        "Case study documentation",
        "Personal branding strategy",
      ],
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Interview Preparation",
      description:
        "Master growth marketing interviews with mock sessions and expert feedback",
      features: [
        "Technical interview practice",
        "Case study presentations",
        "Behavioral question coaching",
        "Salary negotiation guidance",
      ],
    },
    {
      icon: <Briefcase className="h-6 w-6 text-purple-600" />,
      title: "Job Placement Support",
      description:
        "Access our network of hiring partners and receive ongoing career support",
      features: [
        "Direct introductions to employers",
        "Hidden job market access",
        "Application tracking support",
        "6-month job search guarantee",
      ],
    },
  ];

  const careerPaths = [
    {
      title: "Growth Marketing Manager",
      salary: "₦3.5M - ₦8M annually",
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      description: "Lead growth initiatives for startups and scale-ups",
    },
    {
      title: "Digital Marketing Specialist",
      salary: "₦2.5M - ₦6M annually",
      icon: <Target className="h-6 w-6 text-blue-600" />,
      description: "Execute digital campaigns across multiple channels",
    },
    {
      title: "Performance Marketing Lead",
      salary: "₦4M - ₦10M annually",
      icon: <Award className="h-6 w-6 text-purple-600" />,
      description: "Optimize marketing ROI and scale advertising efforts",
    },
  ];

  const industryPartners = [
    "Flutterwave",
    "Paystack",
    "Kuda Bank",
    "PiggyVest",
    "Andela",
    "Jumia",
    "Interswitch",
    "TeamApt",
    "Carbon",
    "Workpay",
  ];

  return (
    <section id="career-prep" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Career Preparation
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our comprehensive career support goes beyond technical training. We
          prepare you for the entire job search process and provide ongoing
          support until you land your dream role.
        </p>

        {/* Career Services */}
        <div className="grid md:grid-cols-1 gap-6 mb-10">
          {careerServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-600"
                      >
                        <div className="h-1.5 w-1.5 bg-green-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Paths */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Career Opportunities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {careerPaths.map((path, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-100 rounded-full">
                    {path.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {path.title}
                </h4>
                <p className="text-green-600 font-medium mb-3">{path.salary}</p>
                <p className="text-gray-600 text-sm">{path.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Partners */}
        <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">
            Our Hiring Partners
          </h3>
          <p className="text-blue-800 text-center mb-6">
            We partner with leading tech companies actively seeking growth
            marketing talent
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {industryPartners.map((partner, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-lg text-blue-900 font-medium border border-blue-200"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-green-50 p-6 rounded-xl border border-green-200">
          <h4 className="font-semibold text-green-900 mb-3">
            Job Placement Guarantee
          </h4>
          <p className="text-green-800">
            We&apos;re so confident in our program that we offer a job placement
            guarantee. If you don&apos;t land a growth marketing role within 6
            months of graduation, we&apos;ll provide additional support and
            training at no extra cost.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerPrep;
