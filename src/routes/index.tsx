import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Trading } from "@/components/Trading";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Phenom Sammy — Web Developer & Trader" },
      { name: "description", content: "Phenom Sammy: 25-year-old web developer and forex/stock trader. Building the web, growing wealth." },
      { property: "og:title", content: "Phenom Sammy — Web Developer & Trader" },
      { property: "og:description", content: "Building the Web. Growing Wealth. Personal portfolio of Phenom Sammy." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Trading />
      <Contact />
      <Footer />
    </main>
  );
}
