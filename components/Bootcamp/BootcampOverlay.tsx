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
      className="relative w-full h-svh sm:h-[420px] md:h-[480px] lg:h-[550px] bg-cover bg-center flex items-center justify-start text-white px-4 sm:px-8 md:px-12"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-80 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mt-10 md:mt-0">
        <Link
          href="/bootcamp"
          className="inline-block mb-3 sm:mb-4 text-white text-sm sm:text-base hover:text-brand-primary transition-colors duration-300"
        >
          <MdKeyboardArrowLeft className="inline-block w-6 h-6" /> Back to
          Bootcamp
        </Link>

        <div className="flex my-6 items-center gap-3 sm:gap-4">
          <div className="bg-white/20 p-2.5 sm:p-3 rounded-md">{icon}</div>
          <h1 className="text-lg md:text-3xl lg:text-4xl font-bold">{title}</h1>
        </div>

        <p className="text-sm md:text-base lg:text-lg mb-6 max-w-2xl">
          {description}
        </p>

        <div className="flex gap-3 flex-wrap mt-10">
          <Button href="/trainings/register" className="text-white">
            Register
          </Button>
          <Button
            href="/trainings/curriculum"
            variant="outline"
            className="text-brand-primary bg-transparent border-brand-primary hover:bg-brand-secondary hover:text-brand-primary transition-all duration-300"
          >
            Download Syllabus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BootcampHero;
