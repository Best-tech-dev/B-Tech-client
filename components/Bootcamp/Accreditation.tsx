import Image from "next/image";

const Accreditation = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trusted, Recognized, and Accredited
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Best Technologies Ltd. Bootcamp is recognized by reputable industry
          bodies and is committed to delivering globally competitive,
          standard-compliant training in software engineering, cloud computing,
          data analysis, DevOps, and more.
        </p>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12 items-center justify-center">
          {[
            { name: "NITDA", src: "/bootcamp/nitda.png" },
            { name: "Google", src: "/bootcamp/google.png" },
            {
              name: "Microsoft Learn",
              src: "/bootcamp/microsoft.png",
            },
            { name: "AWS Educate", src: "/bootcamp/aws.png" },
            { name: "GitHub", src: "/bootcamp/github.png" },
            {
              name: "LinkedIn Learning",
              src: "/bootcamp/linkedin.png",
            },
            { name: "Nvidia.com", src: "/bootcamp/nvidia.png" },
            {
              name: "Oracle Academy",
              src: "/bootcamp/oracle.png",
            },
          ].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center bg-gray-50 shadow-sm rounded-xl p-4 hover:shadow-md transition"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={100}
                height={60}
                className="object-contain h-12 w-auto grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditation;
