"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrow90DegUp } from "react-icons/bs";

interface BlogPost {
  title: string;
  date: string;
  category: string;
  imageSrc: string;
  href: string;
  isHovered: boolean;
  onHover: () => void;
  isLastItem: boolean;
}

const BlogPostCard: React.FC<BlogPost> = ({
  title,
  date,
  category,
  imageSrc,
  href,
  isHovered,
  onHover,
  isLastItem,
}) => {
  return (
    <Link
      href={href}
      className={`relative p-4 transition-all duration-300 border-b-2 border-gray-500 group 
      ${isHovered ? "bg-[#7ca412] text-white" : ""} 
      ${isLastItem ? "border-none" : ""} 
      md:border-none`} // Remove border on last item & for tablets+
      onMouseEnter={onHover}
    >
      {/* Mobile & Tablet: Show image on top */}
      <div className="block sm:block lg:hidden w-full rounded-lg overflow-hidden mb-3">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={500}
          className="w-full h-[200px] object-cover"
        />
      </div>

      {/* Blog Title */}
      <h3 className="font-bold text-md group-hover:underline transition-all mt-2 sm:mt-0">
        {title}
      </h3>

      {/* Date & Category */}
      <p className="text-xs mt-2 flex items-center justify-between">
        <span>
          {date} | {category}
        </span>

        {/* Arrow Icon */}
        <span className="inline-block transition-transform duration-300 group-hover:scale-y-[-1]">
          <BsArrow90DegUp className="inline-block ml-1 text-lg scale-x-[-1]" />
        </span>
      </p>
    </Link>
  );
};

export default BlogPostCard;
