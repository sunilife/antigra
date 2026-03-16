import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogList } from "@/components/blog-list";

export const metadata = {
  title: "Insights | FRAMEOUT",
  description: "Articles and insights on AI, UX design, and digital innovation.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4 block">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8">
            Insights & Articles
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Thoughts on AI, design, technology, and the future of digital experiences.
          </p>
        </div>
      </section>
      <BlogList />
      <Footer />
    </main>
  );
}
