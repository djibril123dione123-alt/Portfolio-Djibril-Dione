import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, Download } from "lucide-react";
import { portfolioData } from "@shared/schema";

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const imageRef = useRef<HTMLDivElement>(null);
  const roleIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const pauseRef = useRef(false);

  const roles = portfolioData.hero.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      if (pauseRef.current) {
        return;
      }

      const currentRole = roles[roleIndexRef.current];

      if (!isDeletingRef.current) {
        if (charIndexRef.current < currentRole.length) {
          charIndexRef.current++;
          setDisplayedText(currentRole.slice(0, charIndexRef.current));
        } else {
          pauseRef.current = true;
          setTimeout(() => {
            isDeletingRef.current = true;
            pauseRef.current = false;
          }, 2000);
        }
      } else {
        if (charIndexRef.current > 0) {
          charIndexRef.current--;
          setDisplayedText(currentRole.slice(0, charIndexRef.current));
        } else {
          isDeletingRef.current = false;
          roleIndexRef.current = (roleIndexRef.current + 1) % roles.length;
        }
      }
    }, 80);

    return () => clearInterval(interval);
  }, [roles]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const rect = imageRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotateX = -(y / rect.height) * 5;
      const rotateY = (x / rect.width) * 5;
      
      imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    };

    const element = imageRef.current;
    element?.addEventListener("mousemove", handleMouseMove);
    element?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element?.removeEventListener("mousemove", handleMouseMove);
      element?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-blob" />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-blob"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 px-4 py-2 text-accent border-accent/30 bg-accent/10"
              data-testid="badge-availability"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {portfolioData.hero.availability}
            </Badge>

            <h1
              className="text-5xl lg:text-7xl font-display font-bold leading-[1.1]"
              data-testid="text-hero-title"
            >
              Je suis <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {displayedText || roles[0]}
              </span>
              <span className="animate-cursor text-primary">|</span>
            </h1>

            <p
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              data-testid="text-hero-description"
            >
              {portfolioData.hero.tagline}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="px-8 py-6 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all"
                data-testid="button-view-projects"
              >
                <a href="#projets" className="flex items-center gap-2">
                  <FolderOpen className="w-5 h-5" />
                  Voir mes projets
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 rounded-full font-bold text-base"
                data-testid="button-download-cv"
              >
                <a href="/cv-djibril-dione.pdf" download className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  CV complet
                </a>
              </Button>
            </div>

            <div className="pt-8 border-t border-border/50">
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                    <span className="text-xs font-bold">M</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center">
                    <span className="text-xs font-bold">CI</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/15 border-2 border-background flex items-center justify-center">
                    <span className="text-xs font-bold">+2</span>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="font-bold text-foreground">Projets livrés</p>
                  <p className="text-muted-foreground">Mairie, Agences Immo...</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative" data-testid="hero-image-container">
            <div
              ref={imageRef}
              className="relative z-20 rounded-2xl p-1 border border-border shadow-2xl transition-all duration-200 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={portfolioData.hero.image}
                alt={portfolioData.hero.name}
                className="rounded-xl w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                data-testid="img-profile"
              />
              
              <div
                className="absolute -bottom-6 -right-6 bg-card text-card-foreground p-4 rounded-xl shadow-xl animate-float border border-border"
                style={{ animationDelay: "1s" }}
                data-testid="badge-stack"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase">
                      Stack
                    </p>
                    <p className="font-bold">Fullstack Dev</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-border rounded-full -z-10"
              style={{ animation: "spin 60s linear infinite" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
