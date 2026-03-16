"use client";

import { Cpu, Layers, Palette, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Seamlessly integrate machine learning and AI capabilities into digital products.",
  },
  {
    icon: Palette,
    title: "UX Design",
    description: "Human-centered design approach that prioritizes user needs and experiences.",
  },
  {
    icon: Layers,
    title: "Development",
    description: "Full-stack development with modern technologies and best practices.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized solutions that deliver speed and reliability at scale.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "12", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Industry Awards" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              We create digital experiences that matter
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-muted-foreground leading-relaxed">
              FRAMEOUT is a design and technology studio specializing in AI-driven digital experiences. 
              We combine cutting-edge artificial intelligence with thoughtful human-centered design to 
              create products that are not only functional but truly transformative. Our team of designers, 
              developers, and AI specialists work collaboratively to push the boundaries of what is possible.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="group p-8 border border-border bg-card hover:border-foreground/20 transition-all duration-300"
            >
              <capability.icon className="w-10 h-10 text-muted-foreground mb-6 group-hover:text-foreground transition-colors" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                {capability.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
