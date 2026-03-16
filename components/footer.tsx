"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Works", href: "#works" },
      { label: "Insights", href: "#insights" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold tracking-ultra-wide text-foreground mb-4 inline-block"
            >
              FRAMEOUT
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              AI & UX Design Studio creating intelligent digital experiences 
              at the intersection of technology and human-centered design.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-medium tracking-wider text-foreground mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} FRAMEOUT. All rights reserved.
          </p>
          <Link
            href="/admin/login"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
