import Image from "next/image";

export default function FromTheVisionary() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          {/* From the Visionary{" "} */}
          <span className="bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">
            From the Visionary Founder
          </span>
        </h2>
      </div>
      <div className="mx-auto max-w-4xl">
        {/* Quote Section */}
        <div className="relative border border-brand-primary p-8 md:p-12 lg:p-16 rounded-lg">
          <div className="absolute top-4 left-4 text-6xl md:text-7xl text-brand-primary font-serif">
            &quot;
          </div>
          <div className="absolute bottom-4 right-4 text-6xl md:text-7xl text-brand-primary font-serif">
            &quot;
          </div>
          <blockquote className="relative z-10 text-brand-text-primary">
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
            <p className="text-brand-text-primary text-sm">Founder & MD</p>
          </div>
        </div>
      </div>
    </section>
  );
}
