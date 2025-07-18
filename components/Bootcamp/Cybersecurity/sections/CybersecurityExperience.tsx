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
    <section id="cybersecurity-experience" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Cybersecurity Experience
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Step into the world of ethical hacking and digital defense. Our
          hands-on cybersecurity training equips you with the tools to protect
          systems, networks, and data—preparing you for high-demand roles in
          corporate security and government agencies.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
            >
              <div className="flex-shrink-0">{highlight.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl border border-red-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Why Choose Cybersecurity?
          </h3>
          <p className="text-gray-700 leading-relaxed">
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
