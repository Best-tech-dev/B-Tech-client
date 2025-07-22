import React from "react";
import { Shield, Lock, Bug, AlertTriangle } from "lucide-react";

const CybersecurityExperience = () => {
  const highlights = [
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Ethical Hacking",
      description:
        "Learn penetration testing and vulnerability assessment techniques",
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: "Digital Defense",
      description:
        "Master network security, firewalls, and system hardening strategies",
    },
    {
      icon: <Bug className="h-8 w-8 text-orange-600" />,
      title: "Threat Analysis",
      description: "Identify, analyze, and mitigate cybersecurity threats",
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-purple-600" />,
      title: "Incident Response",
      description:
        "Develop skills in security monitoring and emergency response",
    },
  ];

  return (
    <section id="cybersecurity-experience" className="mb-12 lg:mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-4 lg:mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            lineHeight: "1.3",
          }}
        >
          Cybersecurity Experience
        </h2>
        <p
          className="text-gray-700 mb-6 lg:mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: "1.6",
          }}
        >
          Step into the world of ethical hacking and digital defense. Our
          hands-on cybersecurity training equips you with the tools to protect
          systems, networks, and data—preparing you for high-demand roles in
          corporate security and government agencies.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 sm:space-x-4 p-4 lg:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex-shrink-0">{highlight.icon}</div>
              <div>
                <h3
                  className="font-semibold text-gray-900 mb-2"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.125rem)",
                    lineHeight: "1.4",
                  }}
                >
                  {highlight.title}
                </h3>
                <p
                  className="text-gray-600"
                  style={{
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                    lineHeight: "1.5",
                  }}
                >
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 lg:p-8 rounded-lg border border-red-100 shadow-md">
          <h3
            className="font-semibold text-gray-900 mb-3 lg:mb-4"
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
              lineHeight: "1.4",
            }}
          >
            Why Choose Cybersecurity?
          </h3>
          <p
            className="text-gray-700 leading-relaxed"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "1.6",
            }}
          >
            With rising cyber threats and growing reliance on digital systems,
            cybersecurity has never been more critical. Organizations need
            experts who can safeguard data, infrastructure, and users. Our
            program prepares you with practical skills in ethical hacking, risk
            management, and security tools to launch a high-impact career in
            digital defense.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityExperience;
