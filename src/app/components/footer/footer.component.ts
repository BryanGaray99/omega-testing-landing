import { Component, OnInit } from "@angular/core";

interface SocialLink {
  icon: string;
  url: string;
  name: string;
}

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  socialLinks: SocialLink[] = [
    { icon: "fab fa-twitter", url: "#", name: "Twitter" },
    { icon: "fab fa-linkedin", url: "#", name: "LinkedIn" },
    { icon: "fab fa-github", url: "#", name: "GitHub" },
  ];

  constructor() {}

  ngOnInit(): void {}

  trackBySocial(index: number, social: SocialLink): string {
    return social.name;
  }

  onSocialClick(social: SocialLink): void {
    console.log(`${social.name} clicked`);
    // Implement actual social media navigation
  }
}
