export type TrainingType = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: "Bootcamp" | "Internship" | "Masterclass" | "Online Course";
  image: string;
  comingSoon?: boolean;
};

export const trainings: TrainingType[] = [
  // Bootcamp Programs
  {
    id: "bootcamp-001",
    title: "Fullstack Web Development Bootcamp",
    slug: "bootcamp",
    description:
      "Intensive hands-on training in frontend and backend technologies. Ideal for beginners and career switchers.",
    category: "Bootcamp",
    image: "/trainings/web-dev.jpg",
  },
  {
    id: "bootcamp-002",
    title: "Front-End Development Bootcamp",
    slug: "bootcamp",
    description:
      "Master modern frontend technologies including React, Vue, and responsive design. Perfect for aspiring frontend developers.",
    category: "Bootcamp",
    image: "/trainings/frontend.jpg",
  },
  {
    id: "bootcamp-003",
    title: "Back-End Development Bootcamp",
    slug: "bootcamp",
    description:
      "Deep dive into server-side technologies, databases, and API development. Build robust backend systems from scratch.",
    category: "Bootcamp",
    image: "/trainings/backend.jpg",
  },
  {
    id: "bootcamp-004",
    title: "Digital Marketing Bootcamp",
    slug: "bootcamp",
    description:
      "A hands-on bootcamp covering digital marketing, SEO, analytics, and growth strategies. Perfect for aspiring marketers and business owners looking to scale online.",
    category: "Bootcamp",
    image: "/trainings/growth.jpg",
  },
  {
    id: "bootcamp-005",
    title: "UI/UX Design Bootcamp",
    slug: "bootcamp",
    description:
      "Comprehensive design training covering user research, wireframing, prototyping, and modern design tools. Create stunning user experiences.",
    category: "Bootcamp",
    image: "/trainings/ui-ux.jpg",
  },
  {
    id: "bootcamp-006",
    title: "Data Analysis Bootcamp",
    slug: "bootcamp",
    description:
      "Learn data analysis, visualization, and statistical methods. Master tools like Python, R, and SQL to make data-driven decisions.",
    category: "Bootcamp",
    image: "/trainings/data-analysis.jpg",
  },
  {
    id: "bootcamp-007",
    title: "Cybersecurity Bootcamp",
    slug: "bootcamp",
    description:
      "Comprehensive cybersecurity training covering ethical hacking, network security, and threat analysis. Protect digital assets effectively.",
    category: "Bootcamp",
    image: "/trainings/cybersecurity.jpg",
  },
  {
    id: "internship-001",
    title: "Tech Internship Program",
    slug: "internship",
    description:
      "Real-world experience working on projects alongside experienced engineers and designers.",
    category: "Internship",
    image: "/trainings/internship.jpg",
    comingSoon: true,
  },
  {
    id: "internship-002",
    title: "Digital Marketing Internship",
    slug: "internship",
    description:
      "Gain hands-on experience in digital marketing campaigns, content creation, and analytics.",
    category: "Internship",
    image: "/trainings/marketing-internship.jpg",
    comingSoon: true,
  },
  {
    id: "internship-003",
    title: "Data Science Internship",
    slug: "internship",
    description:
      "Work on real data science projects, from data collection to machine learning model deployment.",
    category: "Internship",
    image: "/trainings/data-internship.jpg",
    comingSoon: true,
  },
  {
    id: "masterclass-001",
    title: "Advanced React Masterclass",
    slug: "masterclass",
    description:
      "Master advanced React concepts, performance optimization, and modern development patterns.",
    category: "Masterclass",
    image: "/trainings/react-masterclass.jpg",
    comingSoon: true,
  },
  {
    id: "masterclass-002",
    title: "Cloud Architecture Masterclass",
    slug: "masterclass",
    description:
      "Learn cloud infrastructure design, deployment strategies, and scalable architecture patterns.",
    category: "Masterclass",
    image: "/trainings/cloud-masterclass.jpg",
    comingSoon: true,
  },
  {
    id: "masterclass-003",
    title: "Leadership in Tech Masterclass",
    slug: "masterclass",
    description:
      "Develop leadership skills specific to technology teams and digital transformation.",
    category: "Masterclass",
    image: "/trainings/leadership-masterclass.jpg",
    comingSoon: true,
  },
  {
    id: "online-001",
    title: "JavaScript for Beginners",
    slug: "js-course",
    description:
      "Self-paced, exam-based course to help you get certified in JavaScript fundamentals.",
    category: "Online Course",
    image: "/trainings/javascript.jpg",
    comingSoon: true,
  },
  {
    id: "online-002",
    title: "Python Programming Essentials",
    slug: "python-course",
    description:
      "Comprehensive Python course covering syntax, data structures, and practical applications.",
    category: "Online Course",
    image: "/trainings/python.jpg",
    comingSoon: true,
  },
  {
    id: "online-003",
    title: "Database Design and SQL",
    slug: "sql-course",
    description:
      "Learn database design principles and master SQL for data manipulation and analysis.",
    category: "Online Course",
    image: "/trainings/sql.jpg",
    comingSoon: true,
  },
];
