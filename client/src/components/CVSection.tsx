import { portfolioData } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Mail, Phone, MapPin } from "lucide-react";

export function CVSection() {
  const { contact } = portfolioData.hero;
  const { skills } = portfolioData;

  return (
    <section id="cv" className="py-24 bg-muted/20" data-testid="section-cv">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Curriculum Vitae
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Téléchargez mon CV complet au format PDF pour découvrir en détail mon parcours, mes compétences et mes réalisations.
          </p>
          <Button
            asChild
            size="lg"
            className="px-8 py-6 rounded-full font-bold text-base shadow-lg"
            data-testid="button-download-cv-main"
          >
            <a href="/cv-djibril-dione.pdf" download className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Télécharger le CV (PDF)
            </a>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="p-6 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Contact</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                    data-testid="link-email"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Téléphone</p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                    data-testid="link-phone"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Localisation</p>
                  <p className="text-sm text-foreground">{contact.location}</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent/10 rounded-lg text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground">Compétences</h3>
            </div>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index} data-testid={`skill-group-${index}`}>
                  <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="font-medium"
                        data-testid={`badge-skill-${index}-${idx}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 text-center">
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            Prêt à collaborer ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Je suis disponible pour des missions de développement Full-Stack, des projets de digitalisation
            et du conseil en transformation digitale.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="px-8 py-6 rounded-full font-bold"
            data-testid="button-contact-from-cv"
          >
            <a href="#contact">Discutons de votre projet</a>
          </Button>
        </Card>
      </div>
    </section>
  );
}
