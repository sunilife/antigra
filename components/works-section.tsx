"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Neural Interface",
    description: "AI-powered dashboard for real-time data visualization and predictive analytics.",
    tags: ["AI", "Dashboard", "Analytics"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    year: "2024",
  },
  {
    id: 2,
    title: "Quantum Flow",
    description: "E-commerce platform with intelligent product recommendations and seamless checkout.",
    tags: ["Web", "UX", "E-Commerce"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    year: "2024",
  },
  {
    id: 3,
    title: "Synapse Hub",
    description: "Collaborative workspace platform with AI-assisted task management.",
    tags: ["AI", "SaaS", "Productivity"],
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop",
    year: "2023",
  },
  {
    id: 4,
    title: "Echo Analytics",
    description: "Voice-first analytics tool for hands-free business intelligence.",
    tags: ["AI", "Voice", "Analytics"],
    image: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800&h=600&fit=crop",
    year: "2023",
  },
  {
    id: 5,
    title: "Prism Design System",
    description: "Comprehensive design system built for scalable enterprise applications.",
    tags: ["UX", "Design System", "Enterprise"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=800&h=600&fit=crop",
    year: "2023",
  },
  {
    id: 6,
    title: "Cortex Mobile",
    description: "Native mobile app with offline-first architecture and machine learning features.",
    tags: ["Mobile", "AI", "iOS"],
    image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=600&fit=crop",
    year: "2024",
  },
];

export function WorksSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="works" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4 block">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Projects
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative overflow-hidden border border-border bg-card transition-all duration-500 cursor-pointer ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              } ${
                hoveredId === project.id
                  ? "border-foreground/30 scale-[1.02]"
                  : "hover:border-foreground/20"
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium tracking-wider text-muted-foreground bg-secondary/50 px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className={`font-bold text-foreground mb-2 ${index === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-sm">{project.year}</span>
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>

              {/* Glow Effect on Hover */}
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                  hoveredId === project.id ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background: "radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
