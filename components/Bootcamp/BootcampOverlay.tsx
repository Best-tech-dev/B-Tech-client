import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/ui/button";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface BootcampHeroProps {
  title: string;
  description: string;
  icon: ReactNode;
  backgroundImage: string;
}

const BootcampHero = ({
  title,
  description,
  icon,
  backgroundImage,
}: BootcampHeroProps) => {
  return (
    <div
      className="relative w-full h-svh sm:h-[420px] md:h-[480px] lg:h-[550px] bg-cover bg-center flex items-center justify-start text-white px-4 sm:px-6 md:px-8 lg:px-12"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-80 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-[1140px] mx-auto w-full mt-10 md:mt-0">
        <Link
          href="/trainings/bootcamp"
          className="inline-block mb-3 sm:mb-4 text-white text-sm sm:text-base hover:text-brand-primary transition-colors duration-300"
        >
          <MdKeyboardArrowLeft className="inline-block w-5 h-5 sm:w-6 sm:h-6" />{" "}
          Back to Bootcamp
        </Link>

        <div className="flex my-4 sm:my-6 items-center gap-3 sm:gap-4">
          <div className="bg-white/20 p-2 sm:p-2.5 md:p-3 rounded-md">
            {icon}
          </div>
          <h1
            className="font-bold"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              lineHeight: "1.2",
            }}
          >
            {title}
          </h1>
        </div>

        <p
          className="mb-6 max-w-2xl leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>

        <div className="flex gap-3 flex-wrap mt-8 sm:mt-10">
          <Button
            asChild
            className="text-white bg-brand-primary border-brand-primary hover:bg-brand-secondary hover:border-brand-secondary transition-all duration-300 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium rounded-lg"
          >
            <Link href="/trainings/register">Register</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="text-brand-primary bg-transparent border-brand-primary hover:bg-brand-secondary hover:text-brand-primary transition-all duration-300 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium rounded-lg"
          >
            <Link href="/trainings/curriculum">Download Syllabus</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BootcampHero;
