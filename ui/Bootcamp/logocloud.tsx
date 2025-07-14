"use client";

import Image from "next/image";
import { User } from "lucide-react";

const techLogos = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Redux",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "VSCode",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "SQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Google Cloud",
    src: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg",
  },
  {
    name: "WordPress",
    src: "https://www.vectorlogo.zone/logos/wordpress/wordpress-ar21.svg",
  },
  {
    name: "APIs",
    src: "https://www.vectorlogo.zone/logos/json/json-ar21.svg",
  },
];

export default function LogoCloud() {
  // Create alternating arrays for each thread
  const thread1Logos = techLogos.filter((_, index) => index % 3 === 0);
  const thread2Logos = techLogos.filter((_, index) => index % 3 === 1);
  const thread3Logos = techLogos.filter((_, index) => index % 3 === 2);

  return (
    <div className="relative bg-[#0f172a] py-20 overflow-hidden">
      {/* Animated Blob */}
      <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] z-0 animate-blob opacity-30 mix-blend-lighten pointer-events-none">
        <div className="bg-gradient-to-r from-lime-500 to-cyan-400 w-full h-full rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          From Knowledge to{" "}
          <span className="text-brand-primary">Your Success</span>
        </h2>

        <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
          {/* Company Logo Circle - Made Bigger */}
          <div className="absolute left-2 sm:left-8 top-1/2 transform -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center shadow-2xl shadow-brand-primary/30 z-30 animate-pulse">
            <Image
              src="/images/logo.png"
              alt="Best Technologies Ltd"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
            />
          </div>

          {/* User Icon Circle - Made Bigger */}
          <div className="absolute right-2 sm:right-8 top-1/2 transform -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/30 z-30 animate-pulse">
            <User className="w-14 h-14 sm:w-18 sm:h-18 lg:w-22 lg:h-22 text-white" />
          </div>

          {/* Three Straight Connection Threads */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            {/* Top thread */}
            <div
              className="absolute top-[30%] left-0 w-full h-0.5 bg-gradient-to-r from-brand-primary via-cyan-400 to-blue-500 opacity-60 animate-pulse"
              style={{ animationDuration: "2s" }}
            ></div>

            {/* Middle thread */}
            <div
              className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-60 animate-pulse"
              style={{
                animationDuration: "2.5s",
                animationDelay: "0.5s",
              }}
            ></div>

            {/* Bottom thread */}
            <div
              className="absolute top-[70%] left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 animate-pulse"
              style={{
                animationDuration: "3s",
                animationDelay: "1s",
              }}
            ></div>
          </div>

          {/* Flowing Tech Logos */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {/* Top thread logos */}
            <div className="absolute top-[30%] left-0 w-full overflow-hidden">
              <div className="flex animate-marquee-slow">
                {/* Duplicate logos for continuous effect */}
                {[...Array(6)].map((_, setIndex) => (
                  <div key={setIndex} className="flex items-center">
                    {thread1Logos.map((logo, index) => (
                      <TechLogo
                        key={`${setIndex}-${index}`}
                        name={logo.name}
                        src={logo.src}
                        className="mx-6 sm:mx-8 lg:mx-10"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Middle thread logos */}
            <div className="absolute top-1/2 left-0 w-full overflow-hidden">
              <div className="flex animate-marquee-medium">
                {/* Duplicate logos for continuous effect */}
                {[...Array(6)].map((_, setIndex) => (
                  <div key={setIndex} className="flex items-center">
                    {thread2Logos.map((logo, index) => (
                      <TechLogo
                        key={`${setIndex}-${index}`}
                        name={logo.name}
                        src={logo.src}
                        className="mx-6 sm:mx-8 lg:mx-10"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom thread logos */}
            <div className="absolute top-[70%] left-0 w-full overflow-hidden">
              <div className="flex animate-marquee-fast">
                {/* Duplicate logos for continuous effect */}
                {[...Array(6)].map((_, setIndex) => (
                  <div key={setIndex} className="flex items-center">
                    {thread3Logos.map((logo, index) => (
                      <TechLogo
                        key={`${setIndex}-${index}`}
                        name={logo.name}
                        src={logo.src}
                        className="mx-6 sm:mx-8 lg:mx-10"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed">
            We empower you with cutting-edge technologies and industry-standard
            tools, transforming your potential into professional expertise that
            employers value.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-medium {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-slow {
          animation: marquee-slow 40s linear infinite;
        }

        .animate-marquee-medium {
          animation: marquee-medium 35s linear infinite;
        }

        .animate-marquee-fast {
          animation: marquee-fast 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

function TechLogo({
  name,
  src,
  className = "",
}: {
  name: string;
  src: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-brand-primary/50 transition-all duration-300 hover:scale-110 hover:bg-white/20 flex-shrink-0 ${className}`}
    >
      <Image
        src={src}
        alt={name}
        width={28}
        height={28}
        className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 object-contain grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
}
