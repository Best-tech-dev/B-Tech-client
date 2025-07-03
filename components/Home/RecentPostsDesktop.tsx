"use client";

/**
 * A React functional component that displays a section of recent blog posts
 * specifically designed for desktop screens. It includes a header section
 * with a title and description, and a blog posts section with an image preview
 * and a list of blog post cards.
 *
 * @component
 * @returns {JSX.Element} The rendered RecentPostsDesktop component.
 *
 * @remarks
 * - This component uses the `useState` hook to manage the currently hovered blog post.
 * - The `hoveredPost` state determines which blog post's image is displayed on the left side.
 * - The blog posts data is imported from a constant file (`blogPosts`).
 * - The `BlogPostCard` component is used to render individual blog post cards.
 *
 * @example
 * ```tsx
 * import RecentPostsDesktop from './RecentPostsDesktop';
 *
 * const App = () => (
 *   <div>
 *     <RecentPostsDesktop />
 *   </div>
 * );
 *
 * export default App;
 * ```
 *
 * @dependencies
 * - `useState` from React for managing state.
 * - `Image` from Next.js for optimized image rendering.
 * - `blogPosts` constant for blog post data.
 * - `BlogPostCard` component for rendering individual blog post cards.
 *
 * @file
 * Located at `/components/Home/RecentPostsDesktop.tsx`.
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/constants/blogPosts";
import BlogPostCard from "./BlogPostCard";
import { ChevronRight } from "lucide-react";

const RecentPostsDesktop: React.FC = () => {
  const [hoveredPost, setHoveredPost] = useState<BlogPost | null>(blogPosts[0]); // Only applied on large screens

  return (
    <article className="w-full max-w-7xl mx-auto px-12 lg:px-20 py-20 bg-transparent">
      {/* Header Section */}
      <div className="mb-10 text-left">
        <h3 className="text-4xl text-white font-bold mb-4">
          Recently on our blog
        </h3>
        <p className="text-gray-300 text-md">
          Explore our tech insights hub for expert perspectives on industry
          trends, practical tutorials, and digital transformation strategies.
        </p>
      </div>

      {/* Blog Posts Section */}
      <section className="flex gap-8 bg-transparent text-white">
        {/* Left side - Image */}
        <div className="w-1/2 relative overflow-hidden rounded-lg shadow-lg border border-brand-primary/20">
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
            <BlogPostCard
              key={post.title}
              title={post.title}
              date={post.date}
              category={post.category}
              imageSrc={post.imageSrc}
              href={post.href}
              isHovered={hoveredPost?.title === post.title}
              onHover={() => setHoveredPost(post)}
              isLastItem={false}
            />
          ))}
        </div>
      </section>

      {/* Bottom section - View all posts link */}
      <div className="mt-8 text-left">
        <Link
          href="/blog"
          className="text-brand-primary underline group inline-flex items-center"
        >
          View All Posts
          <ChevronRight className="inline ml-1 group-hover:animate-pulse size-5" />
        </Link>
      </div>
    </article>
  );
};

export default RecentPostsDesktop;
