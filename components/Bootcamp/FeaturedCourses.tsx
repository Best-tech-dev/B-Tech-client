import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "Master HTML, CSS, JavaScript, and React to build beautiful web interfaces.",
    img: "/bootcamp/frontend.jpg",
  },
  {
    id: 2,
    title: "Backend Development",
    desc: "Learn Node.js, Express, databases, and APIs to build scalable backend systems.",
    img: "/bootcamp/backend.jpg",
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: "Design intuitive user interfaces and craft exceptional user experiences.",
    img: "/bootcamp/uiux.jpg",
  },
  {
    id: 4,
    title: "Mobile App Dev",
    desc: "Develop cross-platform apps using Flutter or React Native.",
    img: "/bootcamp/mobile.jpg",
  },
  {
    id: 5,
    title: "Data Analytics",
    desc: "Use tools like Excel, SQL, and Power BI to analyze and visualize data.",
    img: "/bootcamp/data.jpg",
  },
  {
    id: 6,
    title: "Cloud & DevOps",
    desc: "Explore AWS, Docker, and CI/CD pipelines to deploy modern apps.",
    img: "/bootcamp/cloud.jpg",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="relative bg-white text-white py-20 px-4 md:px-10 lg:px-20 overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-green-700 rounded-full top-10 left-10 opacity-10 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-green-500 rounded-full bottom-0 right-0 opacity-10 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Section Header */}
      <div className="text-center mb-16 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="italic text-lime-400">Explore Our Programs</span>
        </h2>
        <p className="text-black mt-4 max-w-2xl mx-auto">
          Get hands-on training in high-demand tech skills taught by experts.
          Find your path below.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-[#161a25] rounded-xl overflow-hidden shadow-lg transition transform hover:scale-[1.015]"
          >
            <Image
              src={course.img}
              alt={course.title}
              width={500}
              height={200}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <span className="text-sm font-bold text-lime-400">
                0{course.id}
              </span>
              <h3 className="text-xl font-semibold mt-2">{course.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{course.desc}</p>
              <Link
                href={`/bootcamp/${
                  course.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with hyphen
                    .replace(/^-+|-+$/g, "") // trim hyphens at start/end
                }`}
                className="mt-4 inline-flex items-center gap-2 text-sm text-lime-400 hover:underline"
              >
                Read More{" "}
                <ArrowBigRight size={16} className="hover:underline" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
