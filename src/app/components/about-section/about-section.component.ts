import { Component, OnInit } from "@angular/core";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: "app-about-section",
  templateUrl: "./about-section.component.html",
  styleUrls: ["./about-section.component.css"],
})
export class AboutSectionComponent implements OnInit {
  benefits: Benefit[] = [
    {
      icon: "fas fa-magic",
      title: "Autogeneración inteligente de pruebas",
      description:
        "Crea pruebas automáticamente usando inteligencia artificial",
    },
    {
      icon: "fas fa-code-branch",
      title: "Integración CI/CD",
      description: "Integración perfecta con entornos de desarrollo existentes",
    },
    {
      icon: "fas fa-layer-group",
      title: "Cobertura amplia",
      description: "Testing para APIs, UIs y herramientas de línea de comandos",
    },
    {
      icon: "fas fa-rocket",
      title: "Plataforma escalable",
      description: "Ligera, adaptable y preparada para crecer con tu equipo",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  trackByTitle(index: number, benefit: Benefit): string {
    return benefit.title;
  }

  onStartFree(): void {
    console.log("Comenzar gratis clicked");
    // Implement navigation or action
  }

  onViewDemo(): void {
    console.log("Ver demo clicked");
    // Implement navigation or action
  }
}
