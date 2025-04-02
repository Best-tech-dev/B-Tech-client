"use client";

/**
 * A React functional component that displays a list of recent blog posts
 * optimized for mobile view. It includes a header section and a grid layout
 * for blog posts with images, titles, dates, and categories.
 *
 * @component
 * @returns {JSX.Element} The rendered RecentPostsMobile component.
 *
 * @remarks
 * - This component uses the `blogPosts` constant to dynamically render blog post data.
 * - The `next/image` component is used for optimized image rendering.
 * - The `next/link` component is used for navigation to individual blog posts.
 * - The `react-icons` library is used for the arrow icon.
 *
 * @example
 * ```tsx
 * import RecentPostsMobile from "@/components/Home/RecentPostsMobile";
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <RecentPostsMobile />
 *     </div>
 *   );
 * };
 *
 * export default App;
 * ```
 *
 * @dependencies
 * - `next/image`: For rendering optimized images.
 * - `next/link`: For client-side navigation.
 * - `react-icons/bs`: For the `BsArrow90DegUp` icon.
 *
 * @styles
 * - Tailwind CSS classes are used for styling.
 * - The grid layout adapts to different screen sizes using responsive classes.
 */

import Image from "next/image";
import Link from "next/link";
import { BsArrow90DegUp } from "react-icons/bs";
import { blogPosts } from "@/constants/blogPosts";

const RecentPostsMobile: React.FC = () => {
  return (
    <article className="w-full px-4 md:px-12 py-16 bg-gray-200">
      {/* Header Section */}
      <div className="mb-8 text-left">
        <h3 className="text-3xl text-black font-bold mb-4">
          Recently on our blog
        </h3>
        <p className="text-black text-sm">
          Explore our tech insights hub for expert perspectives on industry
          trends, tutorials, and digital transformation strategies.
        </p>
      </div>

      {/* Blog List */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <Link
            key={post.title}
            href={post.href}
            className={`relative py-4 transition-all duration-300 group ${
              index === 0 ? "" : ""
            }`}
          >
            {/* Image on top */}
            <div className="w-full rounded-lg overflow-hidden mb-3">
              <Image
                src={post.imageSrc}
                alt={post.title}
                width={800}
                height={500}
                className="w-full h-[200px] object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="font-bold text-black text-md group-hover:underline transition-all">
              {post.title}
            </h3>

            {/* Date & Category */}
            <p className="text-xs mt-2 text-black flex items-center justify-between">
              <span>
                {post.date} | {post.category}
              </span>
              <span className="inline-block transition-transform duration-300 group-hover:scale-y-[-1]">
                <BsArrow90DegUp className="inline-block ml-1 text-lg scale-x-[-1]" />
              </span>
            </p>
          </Link>
        ))}
      </section>
    </article>
  );
};

export default RecentPostsMobile;
