import React from "react";
import { Cloud, Server, Settings, Shield } from "lucide-react";

const ComingSoonHero: React.FC = () => {
  return (
    <section id="coming-soon" className="mb-16">
      <div className="max-w-4xl">
        <div className="text-center bg-gradient-to-r from-blue-50 to-cyan-50 p-12 rounded-xl border border-blue-200">
          <div className="mb-6">
            <Cloud className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Cloud & DevOps Bootcamp
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Master modern cloud infrastructure and DevOps practices. Our
            comprehensive bootcamp will prepare you for high-demand roles in
            cloud engineering, DevOps, and site reliability engineering.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-blue-100">
              <Cloud className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2 text-center">
                Cloud Platforms
              </h3>
              <p className="text-gray-600 text-sm text-center">
                AWS, Azure, GCP
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-blue-100">
              <Server className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2 text-center">
                Containerization
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Docker, Kubernetes
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-blue-100">
              <Settings className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2 text-center">
                Infrastructure
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Terraform, Ansible
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-blue-100">
              <Shield className="h-8 w-8 text-orange-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2 text-center">
                Security
              </h3>
              <p className="text-gray-600 text-sm text-center">
                DevSecOps practices
              </p>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              🚀 Expected Launch: Q3 2025
            </h3>
            <p className="mb-4">
              Join the next generation of cloud and DevOps engineers
            </p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Reserve Your Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonHero;
