import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import EngineeringCapabilities from "@/components/EngineeringCapabilities";
import Industries from "@/components/Industries";
import Differentiators from "@/components/Differentiators";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const scroll = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      // Wait a tick for sections to mount, then scroll smoothly
      const t = window.setTimeout(scroll, 50);
      return () => window.clearTimeout(t);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <EngineeringCapabilities />
        <Industries />
        <Differentiators />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
