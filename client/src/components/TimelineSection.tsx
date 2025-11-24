import { portfolioData } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export function TimelineSection() {
  const timeline = portfolioData.timeline;

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return Briefcase;
      case "education":
        return GraduationCap;
      case "certification":
        return Award;
      default:
        return Briefcase;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case "work":
        return "text-primary bg-primary/10";
      case "education":
        return "text-accent bg-accent/10";
      case "certification":
        return "text-chart-3 bg-chart-3/10";
      default:
        return "text-primary bg-primary/10";
    }
  };

  return (
    <section id="parcours" className="py-24" data-testid="section-timeline">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Parcours & Expériences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mon évolution académique et professionnelle dans le domaine du développement et de l'économie numérique.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                  }`}
                  data-testid={`timeline-item-${item.id}`}
                >
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-background border-4 border-primary transform md:-translate-x-1/2 z-10" />

                  <Card
                    className={`ml-8 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    } p-6 hover-elevate transition-all`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg shrink-0 ${getColor(item.type)}`}>
                        {(() => {
                          const Icon = getIcon(item.type);
                          return <Icon className="w-5 h-5" />;
                        })()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h3 className="text-lg font-bold text-foreground">
                              {item.title}
                            </h3>
                            <p className="text-sm font-medium text-primary">
                              {item.company}
                            </p>
                          </div>
                          <Badge variant="outline" className="shrink-0 text-xs">
                            {item.period}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {item.location}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          {item.description}
                        </p>
                        {item.achievements.length > 0 && (
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <span className="text-primary shrink-0 mt-0.5">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
