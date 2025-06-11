import { Component, OnInit } from "@angular/core";

interface CodeExample {
  title: string;
  code: string;
  language: string;
}

interface ComparisonItem {
  plan: string;
  description: string;
}

@Component({
  selector: "app-docs-section",
  templateUrl: "./docs-section.component.html",
  styleUrls: ["./docs-section.component.css"],
})
export class DocsSectionComponent implements OnInit {
  codeExamples: CodeExample[] = [
    {
      title: "Instalación y uso básico",
      language: "bash",
      code: `# Instalar Omega Testing globalmente
npm install -g omega-testing

# Autenticarse en la plataforma
omega login --token TU_TOKEN

# Generar pruebas automáticamente
omega generate --project mi-app --type api --description "Login con email y contraseña"`,
    },
    {
      title: "Integración con CI/CD (GitLab)",
      language: "yaml",
      code: `omega_test:
  stage: test
  image: node:18
  script:
    - npm install -g omega-testing
    - omega run --project mi-app --ci`,
    },
  ];

  comparisonItems: ComparisonItem[] = [
    {
      plan: "Free",
      description: "Generación básica",
    },
    {
      plan: "Basic",
      description: "Generación guiada + CLI",
    },
    {
      plan: "Premium",
      description: "Cobertura, autocuración, API avanzada",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  trackByTitle(index: number, example: CodeExample): string {
    return example.title;
  }

  trackByPlan(index: number, item: ComparisonItem): string {
    return item.plan;
  }

  onViewFullDocs(): void {
    console.log("Ver documentación completa clicked");
    // Implement navigation to full documentation
  }
}
