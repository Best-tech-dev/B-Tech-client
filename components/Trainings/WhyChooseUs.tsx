import Image from "next/image";
import clsx from "clsx";

const sections = [
  {
    title: "Reputable Tutors & Mentors",
    description: [
      "Our tutors aren't just good — they're actively working in the industry. From engineers at top startups to freelancers with global clients, they bring real-world experience into the classroom.",
      "More importantly, they care. They’re available to explain, challenge, and guide you every step of the way.",
    ],
    image: "/imgs/reputable-tutors.avif",
  },
  {
    title: "Intensive Bootcamps with Modern Facilities",
    description: [
      "Our physical Bootcamps are hosted in a modern, tech-enabled environment designed for serious learning. Think of collaborative spaces, fast internet, dual monitors, power backup, and lunch stations — all curated for immersive learning.",
      "You don’t just learn. You become part of a vibrant tech community driven by innovation, mentorship, and daily accountability.",
    ],
    image: "/imgs/bootcamp.avif",
  },
  {
    title: "Tailored Online Courses",
    description: [
      "Our online courses are not just a copy-paste of random content. They are intentionally curated, locally relevant, and globally aligned. We understand the gaps in traditional education and have designed every course to bridge them effectively.",
      "Whether you're a complete beginner or looking to upgrade your skills, our self-paced, project-based approach ensures that you learn by doing — at your own speed, with the support you need.",
    ],
    image: "/imgs/online-courses.avif",
  },
  {
    title: "Verified Certification Credentials",
    description: [
      "We provide industry-recognized certifications that validate your acquired skills and knowledge.  These credentials aren't just a piece of paper; they're a testament to your hard work and proficiency, easily verifiable by employers and professional networks.",
      "Your certification serves as enduring proof of your capabilities, enhancing your career prospects and demonstrating a commitment to lifelong learning.",
    ],
    image: "/imgs/proved-certification.avif",
  },
  {
    title: "Free Resources That Empower",
    description: [
      "We believe in democratizing access to quality learning. That’s why we offer a vast library of free resources, including PDF guides, cheat sheets, recorded sessions, mini-project templates, and in-house mini library — all to keep your learning journey seamless.",
      "No sign-up traps. No gatekeeping. Just pure value you can use right away, whether you're taking one of our programs or not.",
    ],
    image: "/imgs/free-resources.avif",
  },
  {
    title: "24/7 Learner Support",
    description: [
      "You’re never alone. Whether it's tech support, assignment reviews, or career guidance, our team is available round the clock to respond to your needs.",
      "We’ve built a system that combines automation with real human interaction — so you always feel seen, supported, and encouraged to keep going.",
    ],
    image: "/imgs/learner-support.avif",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white text-[#161a25] py-20 px-4 md:px-8 lg:px-16 space-y-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand-primary">
        Here&apos;s Why We&apos;re the Right <br /> Choice For Your Training
      </h1>
      {sections.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            className={clsx(
              "flex flex-col lg:flex-row items-center gap-10",
              !isEven && "lg:flex-row-reverse"
            )}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 h-full">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-primary">
                {item.title}
              </h2>
              {item.description.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-[#444]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
