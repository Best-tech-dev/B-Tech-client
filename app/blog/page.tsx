"use client";

import React, { useState } from "react";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import GetInTouch from "@/components/Footer/GetInTouch";
import {
  Search,
  Calendar,
  Clock,
  Tag,
  User,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Filter,
} from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "technology", name: "Technology", count: 5 },
    { id: "cloud", name: "Cloud Computing", count: 3 },
    { id: "development", name: "Development", count: 4 },
    { id: "cybersecurity", name: "Cybersecurity", count: 2 },
    { id: "digital-transformation", name: "Digital Transformation", count: 3 },
  ];

  const featuredPost = {
    id: 1,
    title: "The Future of AI in Enterprise Software Development",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we build and deploy enterprise applications, from automated testing to intelligent code generation.",
    author: "Sarah Johnson",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "Technology",
    image: "/imgs/blog-featured.jpg",
    featured: true,
  };

  const blogPosts = [
    {
      id: 2,
      title: "Migrating Legacy Systems to the Cloud: Best Practices",
      excerpt:
        "A comprehensive guide to successfully transitioning your legacy infrastructure to modern cloud platforms without disrupting business operations.",
      author: "Michael Chen",
      date: "2024-12-10",
      readTime: "12 min read",
      category: "Cloud Computing",
      image: "/imgs/blog-cloud.jpg",
    },
    {
      id: 3,
      title: "Building Scalable Microservices Architecture",
      excerpt:
        "Learn the essential principles and patterns for designing microservices that can handle enterprise-scale traffic and complexity.",
      author: "David Rodriguez",
      date: "2024-12-05",
      readTime: "10 min read",
      category: "Development",
      image: "/imgs/blog-microservices.jpg",
    },
    {
      id: 4,
      title: "Zero Trust Security: A Modern Approach to Cybersecurity",
      excerpt:
        "Understanding the zero trust model and how to implement it effectively in your organization's security strategy.",
      author: "Emily Watson",
      date: "2024-11-28",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/imgs/blog-security.jpg",
    },
    {
      id: 5,
      title: "Digital Transformation ROI: Measuring Success",
      excerpt:
        "Key metrics and strategies for quantifying the return on investment from your digital transformation initiatives.",
      author: "Robert Kim",
      date: "2024-11-20",
      readTime: "9 min read",
      category: "Digital Transformation",
      image: "/imgs/blog-roi.jpg",
    },
    {
      id: 6,
      title: "API-First Development: Design Principles and Benefits",
      excerpt:
        "Why API-first architecture is becoming the standard for modern software development and how to implement it effectively.",
      author: "Jessica Lee",
      date: "2024-11-15",
      readTime: "6 min read",
      category: "Development",
      image: "/imgs/blog-api.jpg",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      post.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <NavBar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

        {/* Reading pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="readingPattern"
              x="0"
              y="0"
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
            >
              {/* Book pages */}
              <rect
                x="8"
                y="6"
                width="9"
                height="13"
                rx="1"
                stroke="#9ef01a"
                strokeWidth="0.3"
                fill="none"
                opacity="0.3"
              />
              <line
                x1="10"
                y1="9"
                x2="15"
                y2="9"
                stroke="#9ef01a"
                strokeWidth="0.2"
                opacity="0.4"
              />
              <line
                x1="10"
                y1="11"
                x2="14"
                y2="11"
                stroke="#9ef01a"
                strokeWidth="0.2"
                opacity="0.4"
              />
              <line
                x1="10"
                y1="13"
                x2="15"
                y2="13"
                stroke="#9ef01a"
                strokeWidth="0.2"
                opacity="0.4"
              />
              <line
                x1="10"
                y1="15"
                x2="13"
                y2="15"
                stroke="#9ef01a"
                strokeWidth="0.2"
                opacity="0.4"
              />
              <circle cx="12.5" cy="3" r="0.8" fill="#70e000" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#readingPattern)" />
        </svg>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand-primary/30">
              <BookOpen className="w-10 h-10 text-gray-900" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent">
              Tech Insights Blog
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights
              in technology, software development, and digital transformation.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-10 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/40 border border-gray-700/50 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-brand-primary text-gray-900"
                        : "bg-gray-800/40 text-gray-300 hover:bg-gray-700/50"
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-10 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 group">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <div className="h-64 lg:h-full bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10"></div>
                    <div className="absolute top-4 left-4 bg-brand-primary text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TrendingUp className="w-24 h-24 text-brand-primary/30" />
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Tag className="w-4 h-4 mr-2" />
                    <span>{featuredPost.category}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-brand-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <User className="w-4 h-4 mr-2" />
                      <span>{featuredPost.author}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <button className="bg-brand-primary text-gray-900 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-white">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:transform hover:scale-105 group"
                >
                  <div className="h-48 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-brand-primary/30" />
                    </div>
                    <div className="absolute top-4 left-4 bg-gray-900/80 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-brand-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <button className="text-brand-primary hover:text-brand-accent transition-colors font-semibold text-sm flex items-center">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-400 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-secondary/20 via-gray-800/80 to-brand-secondary/20 rounded-3xl p-12 border border-brand-primary/20 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter and never miss the latest insights
                in technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors"
                />
                <button className="bg-brand-primary text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="scroll-m-24">
        <GetInTouch />
        <Footer />
      </footer>
    </div>
  );
};

export default Blog;
