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
    title: "Growth Marketing Bootcamp",
    slug: "bootcamp",
    description:
      "A hands-on bootcamp covering digital marketing, SEO, analytics, and growth strategies. Perfect for aspiring marketers and business owners looking to scale online.",
    category: "Bootcamp",
    image: "/trainings/growth.jpg",
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
    id: "masterclass-001",
    title: "UI/UX Design Masterclass",
    slug: "masterclass",
    description:
      "Master user experience design and modern interface principles from industry experts.",
    category: "Masterclass",
    image: "/trainings/ui-ux.jpg",
  },
  {
    id: "online-001",
    title: "JavaScript for Beginners",
    slug: "js-course",
    description:
      "Self-paced, exam-based course to help you get certified in JavaScript fundamentals.",
    category: "Online Course",
    image: "/trainings/javascript.jpg",
  },
];
