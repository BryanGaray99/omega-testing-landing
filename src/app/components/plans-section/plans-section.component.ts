import { Component, OnInit } from "@angular/core";

interface Plan {
  id: string;
  name: string;
  price: number;
  period?: string;
  features: PlanFeature[];
  featured?: boolean;
  badge?: string;
}

interface PlanFeature {
  text: string;
  included: boolean;
}

@Component({
  selector: "app-plans-section",
  templateUrl: "./plans-section.component.html",
  styleUrls: ["./plans-section.component.css"],
})
export class PlansSectionComponent implements OnInit {
  plans: Plan[] = [
    {
      id: "free",
      name: "Free Demo",
      price: 0,
      features: [
        { text: "25 tokens por 2 semanas", included: true },
        { text: "Sin soporte", included: false },
        { text: "Ideal para exploración inicial", included: true },
      ],
    },
    {
      id: "basic",
      name: "Basic",
      price: 25,
      period: "/ mes",
      featured: true,
      badge: "Más popular",
      features: [
        { text: "1.000 tokens", included: true },
        { text: "Generación guiada", included: true },
        { text: "Soporte básico por correo", included: true },
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: 100,
      period: "/ mes",
      features: [
        { text: "5.000 tokens", included: true },
        { text: "Funciones avanzadas", included: true },
        { text: "Auto-curación y cobertura", included: true },
        { text: "Soporte prioritario", included: true },
        { text: "Acceso anticipado", included: true },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  trackByPlan(index: number, plan: Plan): string {
    return plan.id;
  }

  onSelectPlan(plan: Plan): void {
    console.log(`Plan ${plan.name} selected`);
    // Simulate plan selection process
    // You would implement actual payment/subscription logic here
  }
}
