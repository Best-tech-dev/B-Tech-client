"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { BsArrow90DegUp } from "react-icons/bs";

import { blogPosts } from "@/constants/blogPosts";

const RecentPosts: React.FC = () => {
  const [hoveredPost, setHoveredPost] = useState<BlogPost | null>(blogPosts[0]);

  return (
    <article className="w-full px-20 py-20 bg-gray-200">
      {/* Header Section */}
      <div className="mb-10 text-left">
        <h3 className="text-4xl text-black font-bold mb-4">
          Recently on our blog
        </h3>
        <p className="text-black">
          Explore our tech insights hub for expert perspectives on industry
          trends, practical tutorials,
          <br /> and digital transformation strategies. Our regularly updated
          blog keeps
          <br /> you informed and ahead in the dynamic world of technology.
        </p>
      </div>

      {/* Blog Posts Section */}
      <section className="flex gap-8 bg-gray-200 text-black">
        {/* Left side - Image */}
        <div className="w-1/2 relative overflow-hidden rounded-lg shadow-lg">
          <Image
            src={hoveredPost?.imageSrc ?? "/imgs/blog-placeholder.jpg"}
            alt="Blog post preview"
            width={800}
            height={500}
            className="w-full h-[380px] object-cover transition-all duration-500 ease-in-out"
          />
        </div>

        {/* Right side - Blog posts */}
        <div className="w-1/2 grid grid-cols-2 gap-x-6">
          {blogPosts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className={`relative px-6 pt-4 mb-0 pb-0 transition-all duration-300 border-b-2 border-t-2 border-gray-500 group ${
                hoveredPost?.title === post.title
                  ? "bg-[#7ca412] text-white"
                  : ""
              }`}
              onMouseEnter={() => setHoveredPost(post)}
            >
              {/* Blog Title */}
              <h3 className="font-bold text-md group-hover:underline group-hover:underline-offset-4 transition-all">
                {post.title}
              </h3>

              {/* Date & Category */}
              <p className="text-[10px] mt-2 flex items-center justify-between">
                <span>
                  {post.date} | {post.category}
                </span>

                {/* Arrow Icon */}
                <span className="inline-block transition-transform duration-300 group-hover:scale-y-[-1]">
                  <BsArrow90DegUp className="inline-block ml-1 text-xl scale-x-[-1]" />
                </span>
              </p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
};

export default RecentPosts;
