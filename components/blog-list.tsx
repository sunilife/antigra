"use client";

import { useState } from "react";
import { ArrowUpRight, Calendar, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const allPosts = [
  {
    id: 1,
    title: "The Future of AI-Driven Design Systems",
    excerpt: "Exploring how artificial intelligence is reshaping the way we approach design system architecture and component creation.",
    date: "Mar 12, 2024",
    category: "AI & Design",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Building Accessible Interfaces with Machine Learning",
    excerpt: "How we leverage ML models to automatically detect and fix accessibility issues in real-time during development.",
    date: "Feb 28, 2024",
    category: "Accessibility",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    title: "The Psychology of Micro-interactions",
    excerpt: "Deep dive into how subtle animations and feedback mechanisms affect user perception and engagement.",
    date: "Feb 15, 2024",
    category: "UX Research",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Optimizing Performance for AI-Heavy Applications",
    excerpt: "Strategies and techniques for maintaining smooth user experiences when integrating complex AI features.",
    date: "Jan 30, 2024",
    category: "Performance",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Designing for Voice: The New Frontier",
    excerpt: "Best practices for creating voice-first interfaces that feel natural and intuitive to users.",
    date: "Jan 15, 2024",
    category: "Voice UI",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 6,
    title: "The Ethics of AI in Product Design",
    excerpt: "Navigating the complex ethical considerations when integrating AI into consumer products.",
    date: "Jan 05, 2024",
    category: "Ethics",
    readTime: "15 min read",
    featured: true,
  },
  {
    id: 7,
    title: "From Concept to Production: Our Design Process",
    excerpt: "A behind-the-scenes look at how we approach complex design challenges from ideation to launch.",
    date: "Dec 20, 2023",
    category: "Process",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 8,
    title: "The Rise of Generative UI",
    excerpt: "How generative AI is transforming the way we think about user interface creation and personalization.",
    date: "Dec 10, 2023",
    category: "AI & Design",
    readTime: "11 min read",
    featured: false,
  },
];

const categories = ["All", "AI & Design", "UX Research", "Accessibility", "Performance", "Voice UI", "Ethics", "Process"];

export function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <section className="pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 pb-8 border-b border-border">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background border-border focus:border-foreground/50 text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-foreground text-background"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-8">
              Featured
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group p-8 border border-border bg-card hover:border-foreground/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-medium tracking-wider text-background bg-foreground px-3 py-1">
                      Featured
                    </span>
                    <span className="text-xs font-medium tracking-wider text-foreground bg-secondary px-3 py-1">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-foreground/80 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-8">
            All Articles ({regularPosts.length})
          </h2>
          <div className="space-y-1">
            {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className="group border-t border-border last:border-b py-8 cursor-pointer hover:bg-secondary/30 transition-all duration-300 -mx-6 px-6"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                  <span className="text-3xl font-bold text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors min-w-[50px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs font-medium tracking-wider text-foreground bg-secondary px-3 py-1">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-foreground/80 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-1">
                      {post.excerpt}
                    </p>
                  </div>
                  <ArrowUpRight className="hidden md:block w-5 h-5 text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
