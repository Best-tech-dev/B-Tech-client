"use client";

import React from "react";
import { Shield, Bug, AlertTriangle } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Vulnerability Assessment Report",
      description:
        "Conduct a full vulnerability scan and generate a remediation report",
      icon: <Bug className="h-6 w-6 text-red-600" />,
      duration: "Weeks 3–5",
      deliverables: [
        "Threat modeling",
        "Nmap & Nessus scan logs",
        "CVSS scoring and risk assessment",
        "Actionable mitigation plan",
      ],
    },
    {
      title: "Penetration Testing Simulation",
      description:
        "Simulate a real-world attack on a web app and document all findings",
      icon: <Shield className="h-6 w-6 text-orange-600" />,
      duration: "Weeks 6–8",
      deliverables: [
        "Exploitation walkthrough",
        "Screenshots of compromised systems",
        "Security flaws and fix recommendations",
        "Ethical hacking compliance notes",
      ],
    },
    {
      title: "Security Automation & Incident Response",
      description:
        "Design automated security scripts and simulate a real-time incident response",
      icon: <AlertTriangle className="h-6 w-6 text-blue-600" />,
      duration: "Weeks 9–11",
      deliverables: [
        "Python scripts for log parsing",
        "SIEM alerts and dashboard",
        "Incident playbook",
        "Post-incident analysis",
      ],
    },
  ];

  return (
    <section id="projects" className="mb-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Hands-on Projects
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Gain real-world experience in ethical hacking, defense strategies, and
          security operations. Each project is mapped to real attack scenarios
          and defensive solutions.
        </p>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {project.duration}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Key Deliverables:
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.deliverables.map((deliverable, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600"
                        >
                          <div className="h-1.5 w-1.5 bg-red-600 rounded-full mr-3"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
