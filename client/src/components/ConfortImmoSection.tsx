import { portfolioData } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function ConfortImmoSection() {
  const project = portfolioData.projects.find((p) => p.id === "confort-immo");

  if (!project) return null;

  const screenshots = [
    { src: "/confort-connexion.png", alt: "Page de connexion Confort Immo Archi" },
    { src: "/confort-dashboard.png", alt: "Tableau de bord Confort Immo Archi" },
    { src: "/confort-bailleurs.png", alt: "Gestion des bailleurs" },
    { src: "/confort-contrats.png", alt: "Gestion des contrats" },
    { src: "/confort-locataires.png", alt: "Gestion des locataires" },
    { src: "/confort-paiements.png", alt: "Gestion des paiements" },
    { src: "/confort-produits.png", alt: "Gestion des produits" },
    { src: "/confort-loyers-impays.png", alt: "Suivi des loyers impayés" },
    { src: "/confort-filtres.png", alt: "Filtres avancés" },
    { src: "/confort-rapport-comptabilite.png", alt: "Rapports comptabilité" },
    { src: "/confort-rapport-immeuble.png", alt: "Rapport par immeuble" },
    { src: "/confort-rapport-bailleurs.png", alt: "Bilan bailleurs" },
    { src: "/confort-rapport-agence.png", alt: "Bilan agence" },
  ];

  return (
    <section id="confort-immo" className="py-24 bg-muted/20" data-testid="section-confort-immo">
      <div className="container mx-auto px-6">
        {/* En-tête */}
        <div className="mb-16">
          <div className="flex flex-col gap-2 mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Cas d'étude
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
              {project.title}
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            {project.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Rôle</p>
              <p className="font-semibold text-foreground">{project.role}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Durée</p>
              <p className="font-semibold text-foreground">{project.duration}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-muted-foreground mb-2">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {project.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-background/50 rounded-lg border border-border/30"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{highlight}</p>
              </div>
            ))}
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <Button
                asChild
                variant="outline"
                className="gap-2"
                data-testid="button-confort-github"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  Voir sur GitHub
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Galerie de captures d'écran - Grille responsive */}
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
              Galerie du Système
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-full">
              {screenshots.map((screenshot, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover-elevate transition-all group w-full"
                  data-testid={`img-confort-screenshot-${index}`}
                >
                  <div className="aspect-video bg-muted relative overflow-hidden w-full">
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 bg-background/50">
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {screenshot.alt}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Détails techniques */}
          <Card className="p-8 bg-background/50 border-border/30">
            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              Stack Technique
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-primary mb-3 uppercase">Frontend</h4>
                <div className="space-y-2">
                  {["React", "TypeScript", "Tailwind CSS", "Vite"].map((tech) => (
                    <p key={tech} className="text-sm text-muted-foreground">
                      • {tech}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary mb-3 uppercase">Backend</h4>
                <div className="space-y-2">
                  {["Supabase", "PostgreSQL", "jsPDF", "XLSX"].map((tech) => (
                    <p key={tech} className="text-sm text-muted-foreground">
                      • {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
