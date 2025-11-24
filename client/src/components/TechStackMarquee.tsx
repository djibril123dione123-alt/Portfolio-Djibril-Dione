import { portfolioData } from "@shared/schema";

export function TechStackMarquee() {
  const technologies = portfolioData.techStack;
  
  const TechItem = ({ tech }: { tech: string }) => (
    <>
      <span className="text-muted-foreground font-display font-bold text-xl uppercase tracking-widest whitespace-nowrap">
        {tech}
      </span>
      <span className="text-primary text-xl">•</span>
    </>
  );

  return (
    <section className="py-10 border-y border-border/50 overflow-x-hidden w-full max-w-full" data-testid="section-tech-stack">
      <div className="flex w-max animate-marquee gap-8 md:gap-16 items-center">
        {technologies.map((tech, index) => (
          <TechItem key={`tech-1-${index}`} tech={tech} />
        ))}
        {technologies.map((tech, index) => (
          <TechItem key={`tech-2-${index}`} tech={tech} />
        ))}
      </div>
    </section>
  );
}
