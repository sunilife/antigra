"use client";

import { ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "The Future of AI-Driven Design Systems",
    excerpt: "Exploring how artificial intelligence is reshaping the way we approach design system architecture and component creation.",
    date: "Mar 12, 2024",
    category: "AI & Design",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Building Accessible Interfaces with Machine Learning",
    excerpt: "How we leverage ML models to automatically detect and fix accessibility issues in real-time during development.",
    date: "Feb 28, 2024",
    category: "Accessibility",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "The Psychology of Micro-interactions",
    excerpt: "Deep dive into how subtle animations and feedback mechanisms affect user perception and engagement.",
    date: "Feb 15, 2024",
    category: "UX Research",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Optimizing Performance for AI-Heavy Applications",
    excerpt: "Strategies and techniques for maintaining smooth user experiences when integrating complex AI features.",
    date: "Jan 30, 2024",
    category: "Performance",
    readTime: "12 min read",
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4 block">
              Insights & News
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Latest Articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm font-medium tracking-wide">View All Posts</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Articles List */}
        <div className="space-y-1">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="group border-t border-border last:border-b py-8 md:py-10 cursor-pointer hover:bg-secondary/30 transition-all duration-300 -mx-6 px-6"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                {/* Number */}
                <span className="text-4xl md:text-5xl font-bold text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors min-w-[60px]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
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
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 max-w-3xl">
                    {post.excerpt}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 hidden md:block">
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
