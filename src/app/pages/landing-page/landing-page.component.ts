import { Component } from "@angular/core";

@Component({
  selector: "app-landing-page",
  template: `
    <app-navbar></app-navbar>
    <app-about-section></app-about-section>
    <app-plans-section></app-plans-section>
    <app-docs-section></app-docs-section>
    <app-contact-section></app-contact-section>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class LandingPageComponent {}
