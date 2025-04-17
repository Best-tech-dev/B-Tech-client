export type TestimonialType = {
  id: string;
  name: string;
  image?: string;
  program: string;
  quote: string;
  linkedin?: string;
};

export const testimonials: TestimonialType[] = [
  {
    id: "t1",
    name: "Sarah Smith",
    program: "Frontend Developer Online Course",
    quote:
      "This course helped me build confidence and land a role in just 3 months!",
    image: "/trainings/sarah.jpg",
    linkedin: "https://linkedin.com/in/sarahsmith",
  },
  {
    id: "t2",
    name: "John Doe",
    program: "Data Analysis Bootcamp",
    quote: "The hands-on projects and mentorship made all the difference.",
    image: "/trainings/john.jpg",
    linkedin: "https://linkedin.com/in/johndoe",
  },
];
