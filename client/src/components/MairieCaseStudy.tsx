import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Database, Network, Wrench, Presentation } from "lucide-react";

export function MairieCaseStudy() {
  const screenshots = [
    { src: "/mairie-menu.png", alt: "Menu principal" },
    { src: "/mairie-consultation.png", alt: "Formulaire de consultation" },
    { src: "/mairie-recherche.png", alt: "Système de recherche" },
    { src: "/mairie-ajout.png", alt: "Ajout de courrier" },
  ];

  const achievements = [
    {
      icon: Database,
      title: "Digitalisation Complète",
      description: "Transformation d'un processus manuel en système informatisé moderne avec base de données structurée",
    },
    {
      icon: Network,
      title: "Réseau Local",
      description: "Mise en place d'un réseau de partage de fichiers entre toutes les machines de la mairie",
    },
    {
      icon: Wrench,
      title: "Maintenance IT",
      description: "Mise à jour système, installation Office & antivirus, réparation d'une unité centrale",
    },
    {
      icon: Presentation,
      title: "Présentation Officielle",
      description: "Démonstration et formation du système devant le Maire et son équipe",
    },
  ];

  return (
    <section id="mairie" className="py-24 bg-muted/20" data-testid="section-mairie-case-study">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary/50">
            Cas d'étude approfondi
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Digitalisation de la Mairie de Ouakam
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Un projet complet de transformation digitale : de la conception de la base de données
            à la maintenance informatique, en passant par la formation des utilisateurs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all"
              data-testid={`card-achievement-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                  <achievement.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
            Captures d'écran du système
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-full">
            {screenshots.map((screenshot, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-elevate transition-all group w-full"
                data-testid={`img-mairie-screenshot-${index}`}
              >
                <div className="aspect-video bg-muted relative overflow-hidden w-full">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm font-medium text-center text-muted-foreground">
                    {screenshot.alt}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h3 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            Fonctionnalités Implémentées
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Base de données avec champs structurés (Numéro décharge, Date, Expéditeur, Destinataire, Statut)",
              "Formulaire d'accueil avec filtres dynamiques",
              "Sous-formulaire trié automatiquement",
              "Système de recherche avancée",
              "Export des données",
              "Interface intuitive pour utilisateurs non-techniques",
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3" data-testid={`text-feature-${index}`}>
                <span className="text-primary shrink-0 mt-1">✓</span>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
