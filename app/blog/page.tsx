"use client";

import React, { useState } from "react";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import {
  Search,
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  TrendingUp,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/ui/dialog";
import Image from "next/image";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [email, setEmail] = useState("");
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

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
    author: "Oluwajuwon O.K.",
    authorImage: "/staff/juwon.png",
    date: "2025-03-15",
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
      author: "Mayowa Bernard",
      authorImage: "/staff/mayowa.png",
      date: "2025-03-10",
      readTime: "12 min read",
      category: "Cloud Computing",
      image: "/imgs/blog-cloud.jpg",
    },
    {
      id: 3,
      title: "Building Scalable Microservices Architecture",
      excerpt:
        "Learn the essential principles and patterns for designing microservices that can handle enterprise-scale traffic and complexity.",
      author: "Oluwajuwon O.K.",
      authorImage: "/staff/juwon.png",
      date: "2025-04-05",
      readTime: "10 min read",
      category: "Development",
      image: "/imgs/blog-microservices.jpg",
    },
    {
      id: 4,
      title: "Zero Trust Security: A Modern Approach to Cybersecurity",
      excerpt:
        "Understanding the zero trust model and how to implement it effectively in your organization's security strategy.",
      author: "Oluwajuwon O.K.",
      authorImage: "/staff/juwon.png",
      date: "2025-04-28",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/imgs/blog-security.jpg",
    },
    {
      id: 5,
      title: "Digital Transformation ROI: Measuring Success",
      excerpt:
        "Key metrics and strategies for quantifying the return on investment from your digital transformation initiatives.",
      author: "Steve Oladele",
      authorImage: "/staff/steve.png",
      date: "2025-05-20",
      readTime: "9 min read",
      category: "Digital Transformation",
      image: "/imgs/blog-roi.jpg",
    },
    {
      id: 6,
      title: "API-First Development: Design Principles and Benefits",
      excerpt:
        "Why API-first architecture is becoming the standard for modern software development and how to implement it effectively.",
      author: "Mayowa Bernard",
      authorImage: "/staff/mayowa.png",
      date: "2025-06-01",
      readTime: "6 min read",
      category: "Development",
      image: "/imgs/blog-api.jpg",
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      // Handle newsletter signup
      console.log("Newsletter signup:", email);
      setEmail("");
      setIsSubscriptionModalOpen(true);
    } else {
      console.log("Please enter a valid email address");
    }
  };

  const handleModalClose = () => {
    setIsSubscriptionModalOpen(false);
  };

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
        <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg shadow-brand-primary/30">
              <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-brand-primary to-brand-accent bg-clip-text text-transparent">
              Tech Insights Blog
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights
              in technology, software development, and digital transformation.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 md:py-10 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md w-full lg:w-auto">
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
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:cursor-pointer ${
                      selectedCategory === category.id
                        ? "bg-brand-primary text-white"
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
        <section className="py-8 md:py-10 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 group">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <div className="h-48 md:h-64 lg:h-full relative overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
                    <div className="absolute top-4 left-4 bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                    <div className="absolute top-4 right-4">
                      <TrendingUp className="w-8 h-8 text-brand-primary" />
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 p-6 md:p-8 lg:p-12">
                  <div className="flex items-center text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
                    <Tag className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                    <span>{featuredPost.category}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                    <span>
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-white group-hover:text-brand-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 md:mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs md:text-sm text-gray-400">
                      <div className="relative w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3">
                        <Image
                          src={featuredPost.authorImage}
                          alt={featuredPost.author}
                          fill
                          className="rounded-full object-cover border-2 border-brand-primary/20"
                        />
                      </div>
                      <div>
                        <span className="text-white font-medium text-xs md:text-sm">
                          {featuredPost.author}
                        </span>
                        <div className="flex items-center text-xs text-gray-400 mt-1">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-brand-primary text-white px-4 md:px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 flex items-center text-xs md:text-sm">
                      Read More
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-white">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden border border-gray-700/50 hover:border-brand-primary/30 transition-all duration-500 hover:transform hover:scale-105 group"
                >
                  <div className="h-40 md:h-48 relative overflow-hidden">
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
                  <div className="p-4 md:p-6">
                    <div className="flex items-center text-xs md:text-sm text-gray-400 mb-2 md:mb-3">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white group-hover:text-brand-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-3 md:mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs md:text-sm text-gray-400">
                        <div className="relative w-5 h-5 md:w-6 md:h-6 mr-2">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            fill
                            className="rounded-full object-cover border border-brand-primary/20"
                          />
                        </div>
                        <span className="text-white font-medium text-xs md:text-sm">
                          {post.author}
                        </span>
                      </div>
                      <Button className="transition-colors font-semibold text-xs md:text-sm flex items-center">
                        Read More
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16 md:py-20">
                <Search className="w-12 h-12 md:w-16 md:h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl font-semibold text-gray-400 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-secondary/20 via-gray-800/80 to-brand-secondary/20 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-brand-primary/20 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">
                Stay Updated
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8">
                Subscribe to our newsletter and never miss the latest insights
                in technology and innovation.
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-brand-primary focus:outline-none transition-colors text-sm md:text-base"
                />
                <Button
                  type="submit"
                  className="bg-brand-primary text-white px-4 md:px-6 py-4 md:py-6 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30 text-sm md:text-base"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Newsletter Subscription Modal */}
      <Dialog
        open={isSubscriptionModalOpen}
        onOpenChange={setIsSubscriptionModalOpen}
      >
        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <DialogTitle className="text-2xl font-bold text-white">
              Subscription Successful!
            </DialogTitle>
            <DialogDescription className="text-gray-300 mt-2">
              Thank you for subscribing to our newsletter. You&apos;ll receive
              the latest tech insights and updates directly in your inbox.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6">
            <Button
              onClick={handleModalClose}
              className="w-full bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/90 hover:to-brand-accent/90 text-white font-semibold py-3 rounded-lg transition-all duration-200"
            >
              Continue Reading
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Blog;
