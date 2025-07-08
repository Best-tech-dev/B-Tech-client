"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Heart,
  MessageCircle,
  Bookmark,
  Twitter,
  Facebook,
  Linkedin,
  Link as LinkIcon,
  CheckCircle,
  ArrowRight,
  Tag,
  User,
} from "lucide-react";
import { Button } from "@/ui/button";
import Image from "next/image";

const BlogPostDetail = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Sample blog post data - in a real app, this would come from an API
  const allPosts = [
    {
      id: 1,
      slug: "future-ai-enterprise-software",
      title: "The Future of AI in Enterprise Software Development",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing the way we build and deploy enterprise applications, from automated testing to intelligent code generation.",
      content: `
        <p>Artificial Intelligence (AI) is fundamentally transforming how we approach enterprise software development. From automating mundane tasks to generating intelligent code suggestions, AI is becoming an indispensable tool in the modern developer's toolkit.</p>
        
        <h2>The Current Landscape</h2>
        <p>Today's enterprise software development faces unprecedented challenges. Teams are expected to deliver more features, faster, while maintaining high quality and security standards. Traditional development approaches are reaching their limits, and this is where AI steps in to bridge the gap.</p>
        
        <p>AI-powered tools are already making significant impacts across the software development lifecycle:</p>
        <ul>
          <li><strong>Code Generation:</strong> Tools like GitHub Copilot and ChatGPT are helping developers write code faster and with fewer errors</li>
          <li><strong>Automated Testing:</strong> AI can generate comprehensive test cases and identify potential edge cases that human testers might miss</li>
          <li><strong>Bug Detection:</strong> Machine learning algorithms can identify patterns in code that are likely to cause bugs</li>
          <li><strong>Code Review:</strong> AI assistants can perform initial code reviews, checking for best practices and potential security vulnerabilities</li>
        </ul>
        
        <h2>Transforming Development Workflows</h2>
        <p>The integration of AI into development workflows is creating new paradigms for how software is built. Instead of replacing developers, AI is augmenting their capabilities, allowing them to focus on higher-level architectural decisions and creative problem-solving.</p>
        
        <blockquote>
          "AI is not about replacing human creativity in software development; it's about amplifying it. The future belongs to developers who can effectively collaborate with AI tools to build better software faster."
        </blockquote>
        
        <h2>Enterprise-Specific Applications</h2>
        <p>In the enterprise context, AI is particularly valuable for:</p>
        
        <h3>Legacy Code Modernization</h3>
        <p>AI can analyze legacy codebases and suggest modernization strategies, automatically refactor code, and even help migrate applications to modern architectures like microservices.</p>
        
        <h3>Intelligent Monitoring and Debugging</h3>
        <p>AI-powered monitoring tools can predict system failures before they occur, automatically diagnose performance issues, and suggest optimizations based on usage patterns.</p>
        
        <h3>Security Enhancement</h3>
        <p>Machine learning algorithms can identify security vulnerabilities in real-time, suggest secure coding practices, and even automatically patch common security issues.</p>
        
        <h2>The Road Ahead</h2>
        <p>As we look to the future, several trends are emerging that will shape how AI continues to transform enterprise software development:</p>
        
        <p><strong>Natural Language Programming:</strong> We're moving toward a future where developers can describe what they want in natural language, and AI will generate the corresponding code.</p>
        
        <p><strong>Autonomous Development:</strong> AI systems will increasingly be able to handle entire development tasks independently, from requirements analysis to deployment.</p>
        
        <p><strong>Intelligent Architecture:</strong> AI will help design optimal system architectures based on requirements, constraints, and performance goals.</p>
        
        <h2>Preparing for the AI-Driven Future</h2>
        <p>To succeed in this AI-driven future, development teams should:</p>
        <ul>
          <li>Embrace AI tools and learn to work effectively with them</li>
          <li>Focus on developing skills that complement AI capabilities</li>
          <li>Stay updated on the latest AI developments in software engineering</li>
          <li>Experiment with different AI tools to find what works best for their context</li>
        </ul>
        
        <p>The future of enterprise software development is not just about adopting AI tools—it's about fundamentally rethinking how we approach software creation in an AI-augmented world.</p>
      `,
      author: "Oluwajuwon O.K.",
      authorImage: "/staff/juwon.png",
      authorBio:
        "Senior Software Architect with 10+ years of experience in enterprise software development and AI integration.",
      date: "2025-03-15",
      readTime: "8 min read",
      category: "Technology",
      tags: ["AI", "Enterprise", "Software Development", "Automation"],
      image: "/imgs/blog-featured.jpg",
      likes: 47,
      comments: 12,
    },
    {
      id: 7,
      slug: "modern-javascript-frameworks-comparison",
      title: "Modern JavaScript Frameworks: A Comprehensive Comparison",
      excerpt:
        "Analyzing React, Vue, and Angular to help you choose the right framework for your next project.",
      content: `
        <p>Choosing the right JavaScript framework for your project can make or break your development experience. With so many options available, it's crucial to understand the strengths and weaknesses of each major framework.</p>
        
        <h2>React: The Flexible Giant</h2>
        <p>React has dominated the JavaScript ecosystem for good reason. Its component-based architecture and virtual DOM provide excellent performance and developer experience.</p>
        
        <h3>Strengths:</h3>
        <ul>
          <li>Huge ecosystem and community support</li>
          <li>Excellent performance with virtual DOM</li>
          <li>Great debugging tools</li>
          <li>Backed by Meta (Facebook)</li>
        </ul>
        
        <h3>Best for:</h3>
        <p>Large-scale applications, teams with JavaScript expertise, projects requiring extensive third-party integration.</p>
        
        <h2>Vue: The Progressive Framework</h2>
        <p>Vue.js strikes a balance between React's flexibility and Angular's structure, making it an excellent choice for teams of all sizes.</p>
        
        <h3>Strengths:</h3>
        <ul>
          <li>Gentle learning curve</li>
          <li>Excellent documentation</li>
          <li>Two-way data binding</li>
          <li>Smaller bundle size</li>
        </ul>
        
        <h2>Angular: The Full Framework</h2>
        <p>Angular provides a complete solution with built-in features for routing, forms, HTTP client, and more.</p>
        
        <h3>Strengths:</h3>
        <ul>
          <li>Complete framework with everything included</li>
          <li>Strong TypeScript support</li>
          <li>Powerful CLI tools</li>
          <li>Great for enterprise applications</li>
        </ul>
        
        <h2>Making the Right Choice</h2>
        <p>The choice between these frameworks depends on your specific needs, team expertise, and project requirements. Consider factors like learning curve, performance requirements, and long-term maintainability.</p>
      `,
      author: "Oluwajuwon O.K.",
      authorImage: "/staff/juwon.png",
      authorBio:
        "Senior Software Architect with 10+ years of experience in enterprise software development and AI integration.",
      date: "2025-06-10",
      readTime: "8 min read",
      category: "Software Development",
      tags: ["JavaScript", "React", "Vue", "Angular", "Frontend"],
      image: "/imgs/blog-img-1.png",
      likes: 32,
      comments: 8,
    },
    // Add more sample posts as needed
  ];

  const relatedPosts = [
    {
      id: 2,
      title: "Building Scalable Microservices Architecture",
      excerpt:
        "Learn the essential principles and patterns for designing microservices that can handle enterprise-scale traffic.",
      image: "/imgs/blog-microservices.jpg",
      category: "Development",
      readTime: "10 min read",
    },
    {
      id: 3,
      title: "DevOps Culture: Bridging Development and Operations",
      excerpt:
        "How to foster a DevOps culture that accelerates delivery while maintaining quality and reliability.",
      image: "/imgs/blog-img-3.png",
      category: "Software Development",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "Test-Driven Development: Best Practices and Tools",
      excerpt:
        "A deep dive into TDD methodology and the tools that make it effective in modern software development.",
      image: "/imgs/blog-img-2.png",
      category: "Software Development",
      readTime: "10 min read",
    },
  ];

  const currentPost =
    allPosts.find((post) => post.slug === slug) || allPosts[0];

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = currentPost.title;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
        break;
    }
    setShowShareMenu(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section with Blog Image Background */}
        <section className="relative pt-20 pb-32 px-4 md:px-8 min-h-[80vh] flex items-end">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${currentPost.image}')`,
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto w-full">
            <Link
              href="/blog"
              className="inline-flex items-center text-white/80 hover:text-brand-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                {currentPost.category}
              </span>
              {currentPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-800/60 text-gray-300 px-2 py-1 rounded-full text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              {currentPost.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {currentPost.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={currentPost.authorImage}
                    alt={currentPost.author}
                    fill
                    className="rounded-full object-cover border-2 border-brand-primary/30"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {currentPost.author}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-3">
                      {new Date(currentPost.date).toLocaleDateString()}
                    </span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{currentPost.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-colors ${
                    isLiked
                      ? "bg-red-500/20 text-red-400"
                      : "bg-gray-800/60 text-gray-400 hover:text-red-400"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`}
                  />
                  <span className="text-sm">
                    {currentPost.likes + (isLiked ? 1 : 0)}
                  </span>
                </button>

                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-2 rounded-full transition-colors ${
                    isBookmarked
                      ? "bg-brand-primary/20 text-brand-primary"
                      : "bg-gray-800/60 text-gray-400 hover:text-brand-primary"
                  }`}
                >
                  <Bookmark
                    className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`}
                  />
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="p-2 rounded-full bg-gray-800/60 text-gray-400 hover:text-brand-primary transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  {showShareMenu && (
                    <div className="absolute right-0 top-12 bg-gray-800 rounded-lg shadow-lg p-2 flex flex-col space-y-1 min-w-[120px]">
                      <button
                        onClick={() => handleShare("twitter")}
                        className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-700 rounded text-gray-300 hover:text-white transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                        <span className="text-sm">Twitter</span>
                      </button>
                      <button
                        onClick={() => handleShare("facebook")}
                        className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-700 rounded text-gray-300 hover:text-white transition-colors"
                      >
                        <Facebook className="w-4 h-4" />
                        <span className="text-sm">Facebook</span>
                      </button>
                      <button
                        onClick={() => handleShare("linkedin")}
                        className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-700 rounded text-gray-300 hover:text-white transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span className="text-sm">LinkedIn</span>
                      </button>
                      <button
                        onClick={() => handleShare("copy")}
                        className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-700 rounded text-gray-300 hover:text-white transition-colors"
                      >
                        <LinkIcon className="w-4 h-4" />
                        <span className="text-sm">
                          {copySuccess ? "Copied!" : "Copy Link"}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/30">
              {/* Article Body */}
              <div
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
                style={{
                  color: "#e5e7eb",
                }}
              />

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-gray-700/50">
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-brand-primary/20 hover:text-brand-primary transition-colors cursor-pointer"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author Bio */}
                <div className="bg-gray-700/30 rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={currentPost.authorImage}
                        alt={currentPost.author}
                        fill
                        className="rounded-full object-cover border-2 border-brand-primary/30"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {currentPost.author}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {currentPost.authorBio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:transform hover:scale-105 group cursor-pointer"
                >
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-gray-900/80 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-brand-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {post.readTime}
                      </span>
                      <Button className="transition-colors font-semibold text-sm flex items-center">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Comments Section Placeholder */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Comments ({currentPost.comments})
                </h3>
                <MessageCircle className="w-6 h-6 text-brand-primary" />
              </div>
              <div className="text-center py-12">
                <MessageCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">
                  Comments section coming soon...
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  We're working on bringing you an interactive comments
                  experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Custom Styles for Prose */}
      <style jsx global>{`
        .prose h2 {
          color: #ffffff;
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose h3 {
          color: #9ef01a;
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose p {
          margin-bottom: 1.25rem;
          line-height: 1.75;
        }
        .prose ul {
          margin: 1.25rem 0;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose strong {
          color: #9ef01a;
          font-weight: 600;
        }
        .prose blockquote {
          border-left: 4px solid #9ef01a;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #d1d5db;
          background: rgba(158, 240, 26, 0.1);
          padding: 1.5rem;
          border-radius: 0.5rem;
        }
        .prose code {
          background: rgba(55, 65, 81, 0.8);
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          color: #9ef01a;
        }
      `}</style>
    </div>
  );
};

export default BlogPostDetail;
