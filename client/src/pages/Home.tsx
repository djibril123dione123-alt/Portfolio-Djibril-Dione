import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { ProjectsSection } from "@/components/ProjectsSection";
import { MairieCaseStudy } from "@/components/MairieCaseStudy";
import { ConfortImmoSection } from "@/components/ConfortImmoSection";
import { TimelineSection } from "@/components/TimelineSection";
import { CVSection } from "@/components/CVSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

declare global {
  interface Window {
    gsap: typeof import("gsap");
    ScrollTrigger: typeof import("gsap/ScrollTrigger");
  }
}

export default function Home() {
  useEffect(() => {
    let gsapInitialized = false;

    const initGSAP = () => {
      if (typeof window === "undefined" || !window.gsap || !window.ScrollTrigger || gsapInitialized) {
        return null;
      }

      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      
      gsap.registerPlugin(ScrollTrigger);
      gsapInitialized = true;

      const animations: gsap.core.Tween[] = [];
      const triggers: any[] = [];

      const mainSections = gsap.utils.toArray("section[id]:not(#hero)");

      mainSections.forEach((section: any) => {
        const animation = gsap.fromTo(
          section,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
        animations.push(animation);
        if (animation.scrollTrigger) {
          triggers.push(animation.scrollTrigger);
        }
      });

      return { animations, triggers };
    };

    const handleSmoothScroll = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const targetId = href.slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    const gsapData = initGSAP();

    return () => {
      if (gsapData) {
        gsapData.triggers.forEach((trigger) => trigger?.kill?.());
        gsapData.animations.forEach((anim) => anim.kill());
      }
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <TechStackMarquee />
        <ProjectsSection />
        <MairieCaseStudy />
        <ConfortImmoSection />
        <TimelineSection />
        <CVSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
