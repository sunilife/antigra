"use client";

import { useState, useRef } from "react";
import { Send, Upload, X, FileText, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });
    setFile(null);

    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Text */}
          <div>
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8">
              {"Let's create something extraordinary"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Have a project in mind? We would love to hear about it. Send us a message 
              and we will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <a
                  href="mailto:hello@frameout.studio"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  hello@frameout.studio
                </a>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Location</div>
                <span className="text-foreground">Seoul, South Korea</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-foreground/50 text-foreground placeholder:text-muted-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-foreground/50 text-foreground placeholder:text-muted-foreground"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-background border-border focus:border-foreground/50 text-foreground placeholder:text-muted-foreground"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground/20 text-foreground placeholder:text-muted-foreground resize-none transition-colors"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Attachment (Optional)
                </label>
                <div
                  className={`relative border border-dashed border-border hover:border-foreground/30 transition-colors p-6 cursor-pointer ${
                    file ? "bg-secondary/30" : "bg-background"
                  }`}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                  />
                  {file ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm text-foreground truncate max-w-[200px]">
                          {file.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          ({(file.size / 1024).toFixed(1)} KB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile();
                        }}
                        className="p-1 hover:bg-secondary/50 rounded transition-colors"
                      >
                        <X className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-center">
                      <Upload className="w-6 h-6 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </span>
                      <span className="text-xs text-muted-foreground">
                        PDF, DOC, TXT, PNG, JPG (max 10MB)
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full py-6 bg-foreground text-background hover:bg-foreground/90 font-medium tracking-wide transition-all duration-300 disabled:opacity-70"
              >
                {isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Message Sent!
                  </span>
                ) : isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
