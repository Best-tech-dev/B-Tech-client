import Navbar from "@/components/Bootcamp/Navbar";
import Footer from "@/components/Footer/Footer";
import {
  Video,
  Clock,
  Download,
  Award,
  Smartphone,
  PlayCircle,
  CheckCircle,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function OnlineCoursesPage() {
  const courses = [
    {
      id: "js-course",
      title: "JavaScript for Beginners",
      description:
        "Master the fundamentals of JavaScript programming from scratch. Learn variables, functions, objects, and DOM manipulation through hands-on projects.",
      image: "/trainings/javascript.jpg",
      duration: "8-12 weeks",
      level: "Beginner",
      lessons: 45,
      projects: 8,
      features: [
        "Interactive coding exercises",
        "Real-world projects",
        "Downloadable code samples",
        "Certificate of completion",
        "Lifetime access",
      ],
    },
    {
      id: "python-course",
      title: "Python Programming Essentials",
      description:
        "Comprehensive Python course covering syntax, data structures, and practical applications. Perfect for beginners and career switchers.",
      image: "/trainings/online-python.jpg",
      duration: "10-14 weeks",
      level: "Beginner",
      lessons: 52,
      projects: 10,
      features: [
        "Hands-on Python projects",
        "Data structures deep dive",
        "Web scraping basics",
        "API integration",
        "Career guidance",
      ],
    },
    {
      id: "database-course",
      title: "Database Design and SQL",
      description:
        "Learn database design principles and master SQL for data manipulation and analysis. Essential skills for any developer.",
      image: "/trainings/online-database.jpg",
      duration: "6-8 weeks",
      level: "Intermediate",
      lessons: 38,
      projects: 6,
      features: [
        "Database design principles",
        "Advanced SQL queries",
        "Performance optimization",
        "Real database projects",
        "Industry best practices",
      ],
    },
    {
      id: "react-course",
      title: "React Fundamentals",
      description:
        "Learn the basics of React, including components, state management, and hooks. Build modern, interactive user interfaces.",
      image: "/trainings/online-react.jpg",
      duration: "8-10 weeks",
      level: "Intermediate",
      lessons: 42,
      projects: 7,
      features: [
        "Component-based architecture",
        "State management with hooks",
        "React Router navigation",
        "API integration",
        "Modern React patterns",
      ],
    },
    {
      id: "api-course",
      title: "API Development with Node.js",
      description:
        "Build RESTful APIs using Node.js and Express, covering authentication, validation, and error handling for production-ready applications.",
      image: "/trainings/online-nodejs.jpg",
      duration: "10-12 weeks",
      level: "Intermediate",
      lessons: 48,
      projects: 9,
      features: [
        "RESTful API design",
        "Authentication & authorization",
        "Database integration",
        "Error handling",
        "API documentation",
      ],
    },
    {
      id: "orm-course",
      title: "Object Relational Mapping (ORM)",
      description:
        "Learn how to use ORMs like Sequelize and TypeORM to interact with databases in a more intuitive and efficient way.",
      image: "/trainings/online-orm.jpg",
      duration: "6-8 weeks",
      level: "Intermediate",
      lessons: 35,
      projects: 5,
      features: [
        "ORM fundamentals",
        "Database relationships",
        "Query optimization",
        "Migration strategies",
        "Advanced ORM features",
      ],
    },
    {
      id: "vibe-coding",
      title: "Vibe Coding",
      description:
        "Learn the fundamentals of coding with Vibe Coding, a fun and interactive way to get started with programming concepts.",
      image: "/trainings/online-vibe-coding.jpg",
      duration: "4-6 weeks",
      level: "Beginner",
      lessons: 28,
      projects: 6,
      features: [
        "Gamified learning experience",
        "Interactive coding challenges",
        "Progress tracking",
        "Community support",
        "Fun project-based learning",
      ],
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Learn at Your Own Pace",
      description:
        "Study when it's convenient for you. Our courses are designed for busy professionals and students.",
    },
    {
      icon: Download,
      title: "Downloadable Resources",
      description:
        "Access course materials, code samples, and resources even when you're offline.",
    },
    {
      icon: Award,
      title: "Certificate of Completion",
      description:
        "Earn a verified certificate upon successful completion of each course.",
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly",
      description:
        "Learn on any device - desktop, tablet, or mobile. Our platform adapts to your screen.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Dark Theme */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <svg
            className="absolute inset-0 w-full h-full opacity-5"
            viewBox="0 0 100 100"
          >
            <defs>
              <pattern
                id="techGrid"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="1" fill="#9ef01a" opacity="0.3" />
                <path
                  d="M10,0 L10,20 M0,10 L20,10"
                  stroke="#9ef01a"
                  strokeWidth="0.3"
                  opacity="0.2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#techGrid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Video className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Online{" "}
            <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent">
              Courses
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Master in-demand tech skills with our comprehensive online courses.
            Learn at your own pace with expert-crafted content, hands-on
            projects, and lifetime access.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-white/20">
              <PlayCircle className="w-4 h-4 text-brand-primary" />
              <span className="text-gray-300">300+ Video Lessons</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-white/20">
              <CheckCircle className="w-4 h-4 text-brand-primary" />
              <span className="text-gray-300">Hands-on Projects</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-white/20">
              <Star className="w-4 h-4 text-brand-primary" />
              <span className="text-gray-300">Expert Instructors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                Online Courses
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible, comprehensive, and designed for real-world application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Available Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully curated selection of courses designed to
              give you practical, job-ready skills.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Coming Soon
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-6 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Video className="w-4 h-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>{course.projects} projects</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      What you&apos;ll learn:
                    </h4>
                    <ul className="space-y-1">
                      {course.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-600 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-gray-500 text-sm">
                    Course launching soon - Join our waitlist for early access
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 rounded-3xl p-12 border border-brand-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who have transformed their careers with
              our online courses. Start your journey today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/90 hover:to-brand-accent/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Notified When Available
              <Video className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
