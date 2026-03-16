import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { WorksSection } from "@/components/works-section";
import { InsightsSection } from "@/components/insights-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WorksSection />
      <InsightsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
