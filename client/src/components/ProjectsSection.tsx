import { portfolioData } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = portfolioData.projects;

  return (
    <section id="projets" className="py-24" data-testid="section-projects">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Projets Récents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Découvrez mes réalisations techniques et leur impact concret pour les entreprises et institutions.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="p-8 lg:p-12 hover-elevate transition-all duration-300"
              data-testid={`card-project-${project.id}`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground leading-tight">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="shrink-0">
                        {project.duration}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium text-primary mb-2">
                      {project.role}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                      Points Clés
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1 shrink-0">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {project.link && (
                      <Button
                        asChild
                        variant="default"
                        className="rounded-full"
                        data-testid={`button-project-${project.id}-link`}
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Voir le projet
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full"
                        data-testid={`button-project-${project.id}-github`}
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          Code source
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {project.images.length > 0 && (
                  <div className="relative">
                    <div className="macbook-frame">
                      <div className="macbook-screen">
                        <img
                          src={project.images[0]}
                          alt={`${project.title} screenshot`}
                          className="w-full h-full object-cover"
                          data-testid={`img-project-${project.id}`}
                        />
                      </div>
                      <div className="macbook-base" />
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        .macbook-frame {
          position: relative;
          background: hsl(var(--card));
          border-radius: 16px 16px 0 0;
          border: 1px solid hsl(var(--border));
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          transition: transform 0.5s ease;
        }
        
        .macbook-frame:hover {
          transform: scale(1.02);
        }
        
        .macbook-screen {
          position: relative;
          background: hsl(var(--background));
          border-radius: 12px 12px 0 0;
          overflow: hidden;
          margin: 3%;
          aspect-ratio: 16/10;
          border: 1px solid hsl(var(--border));
        }
        
        .macbook-base {
          background: hsl(var(--muted));
          height: 14px;
          border-radius: 0 0 12px 12px;
          position: relative;
        }
        
        .macbook-base::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20%;
          height: 4px;
          background: hsl(var(--card));
          border-radius: 0 0 4px 4px;
        }
      `}</style>
    </section>
  );
}
