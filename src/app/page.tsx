import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import RevealObserver from "@/components/RevealObserver";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Stack from "@/components/Stack";
import Systems from "@/components/Systems";
import Ticker from "@/components/Ticker";
import Work from "@/components/Work";
import { contact, site } from "@/content/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  description: site.tagline,
  url: site.url,
  email: contact.email || undefined,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
  worksFor: { "@type": "Organization", name: "BrandDrive" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Federal University of Technology, Minna",
  },
  sameAs: [contact.linkedin, contact.github, contact.x].filter(Boolean),
  knowsAbout: [
    "Machine Learning",
    "Agentic AI",
    "Large Language Models",
    "LLM Evaluation",
    "MLOps",
    "Multi-Agent Systems",
    "Time-Series Forecasting",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <RevealObserver />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Ticker />
        <Work />
        <Systems />
        <Principles />
        <About />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
