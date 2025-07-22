import React from "react";
import { CheckCircle } from "lucide-react";

const WhatYoullLearn: React.FC = () => {
  const learningModules = [
    {
      category: "Cybersecurity Essentials",
      skills: [
        "Security principles and threat models",
        "Network protocols and architecture",
        "Vulnerability scanning and penetration testing",
        "Encryption and authentication mechanisms",
        "Incident response and risk management",
      ],
    },
    {
      category: "Threat Analysis & Mitigation",
      skills: [
        "Threat modeling and vulnerability assessment",
        "Risk analysis and mitigation planning",
        "Penetration testing strategies",
        "Social engineering and phishing simulations",
        "Security audit and compliance reviews",
      ],
    },
    {
      category: "Security Planning & Simulation",
      skills: [
        "Security infrastructure mapping",
        "Simulating real-world attacks (red team/blue team)",
        "Designing access control flows",
        "Secure application development (DevSecOps)",
        "Cloud security and container hardening",
      ],
    },
    {
      category: "Security Tools & Platforms",
      skills: [
        "Kali Linux and Parrot OS for penetration testing",
        "Nmap, Wireshark, and Metasploit",
        "Burp Suite for web app security testing",
        "SIEM tools like Splunk and IBM QRadar",
        "Password cracking and encryption tools (Hashcat, OpenSSL)",
      ],
    },
  ];

  return (
    <section id="what-youll-learn" className="mb-12 lg:mb-16">
      <div className="max-w-4xl">
        <h2
          className="font-bold text-gray-900 mb-4 lg:mb-6"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            lineHeight: "1.3",
          }}
        >
          What You&apos;ll Learn
        </h2>
        <p
          className="text-gray-700 mb-6 lg:mb-8 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: "1.6",
          }}
        >
          Designed by industry security experts, our curriculum equips you with
          the knowledge and tools needed to secure digital systems, identify
          vulnerabilities, and defend against real-world cyber threats.
        </p>

        <div className="space-y-6 lg:space-y-8">
          {learningModules.map((module, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 lg:p-6"
            >
              <h3
                className="font-semibold text-gray-900 mb-3 lg:mb-4"
                style={{
                  fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                  lineHeight: "1.4",
                }}
              >
                {module.category}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {module.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 sm:space-x-3"
                  >
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 flex-shrink-0" />
                    <span
                      className="text-gray-700"
                      style={{
                        fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                        lineHeight: "1.5",
                      }}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 lg:mt-8 bg-red-50 p-4 lg:p-6 rounded-lg border border-red-100 shadow-md">
          <h3
            className="font-semibold text-red-900 mb-2 lg:mb-3"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              lineHeight: "1.4",
            }}
          >
            Skills-Verified Projects
          </h3>
          <p
            className="text-red-800"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "1.6",
            }}
          >
            Each security challenge, simulation, and audit you complete adds to
            a portfolio of hands-on work. By the end of the program, you&apos;ll
            have 5–7 case studies that showcase your threat analysis,
            penetration testing, and defense strategies—ready to present to
            hiring managers or security leads.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;
