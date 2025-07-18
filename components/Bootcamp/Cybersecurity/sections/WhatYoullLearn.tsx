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
    <section id="what-youll-learn" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What You&apos;ll Learn
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Designed by industry security experts, our curriculum equips you with
          the knowledge and tools needed to secure digital systems, identify
          vulnerabilities, and defend against real-world cyber threats.
        </p>

        <div className="space-y-8">
          {learningModules.map((module, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {module.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {module.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-red-50 p-6 rounded-xl border border-red-100">
          <h3 className="text-lg font-semibold text-red-900 mb-3">
            Skills-Verified Projects
          </h3>
          <p className="text-red-800">
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
