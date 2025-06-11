import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutSectionComponent } from "./components/about-section/about-section.component";
import { PlansSectionComponent } from "./components/plans-section/plans-section.component";
import { DocsSectionComponent } from "./components/docs-section/docs-section.component";
import { ContactSectionComponent } from "./components/contact-section/contact-section.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutSectionComponent,
    PlansSectionComponent,
    DocsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
