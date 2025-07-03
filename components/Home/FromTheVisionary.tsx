import Image from "next/image";

export default function FromTheVisionary() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 overflow-hidden">
      {/* Complex SVG background pattern */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="trianglePattern"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 10 L70 60 L10 60 Z"
                stroke="#9ef01a"
                strokeWidth="1.5"
                fill="none"
                opacity="0.4"
              />
              <path
                d="M20 30 L60 30 L40 70 Z"
                stroke="#70e000"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
              />
            </pattern>
            <linearGradient
              id="brandGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#9ef01a" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#70e000" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#trianglePattern)" />
          <ellipse
            cx="200"
            cy="300"
            rx="180"
            ry="120"
            fill="url(#brandGradient)"
            transform="rotate(25 200 300)"
          />
          <ellipse
            cx="600"
            cy="500"
            rx="200"
            ry="140"
            fill="url(#brandGradient)"
            transform="rotate(-15 600 500)"
          />
        </svg>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-brand-accent/15 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          {/* From the Visionary{" "} */}
          <span className="bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">
            From the Visionary Founder
          </span>
        </h2>
      </div>
      <div className="mx-auto max-w-4xl relative z-10">
        {/* Quote Section */}
        <div className="relative border border-brand-primary/50 bg-gray-800/90 backdrop-blur-sm p-8 md:p-12 lg:p-16 rounded-lg shadow-xl">
          <div className="absolute top-4 left-4 text-6xl md:text-7xl text-brand-primary font-serif">
            &quot;
          </div>
          <div className="absolute bottom-4 right-4 text-6xl md:text-7xl text-brand-primary font-serif">
            &quot;
          </div>
          <blockquote className="relative z-10 text-gray-300">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
              At Best Technologies Ltd., we are dedicated to empowering
              businesses through innovative digital solutions. Our mission is to
              harness the power of Artificial Intelligence and Machine Learning
              to drive transformation, efficiency, and growth for our clients.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
              As a forward-thinking digital agency, we seamlessly integrate
              cutting-edge AI/ML technologies into our services—enabling smarter
              decision-making, personalized experiences, and sustainable success
              in an ever-evolving digital landscape.
            </p>
          </blockquote>
        </div>

        {/* Founder Information */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="relative">
            <Image
              src="/imgs/MD.jpg"
              alt="Founder portrait"
              width={80}
              height={80}
              className="rounded-full border-2 border-green-500/20 w-20 h-20 object-cover shadow-lg"
            />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-semibold text-brand-primary">
              Gbadega Adedapo
            </h3>
            <p className="text-gray-400 text-sm">Founder & MD</p>
          </div>
        </div>
      </div>
    </section>
  );
}
