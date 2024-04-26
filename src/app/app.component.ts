import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from "./home/home.component";
import { StoryComponent } from "./story/story.component";
import { QuoteComponent } from "./quote/quote.component";
import { WorkflowComponent } from "./workflow/workflow.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, HomeComponent, StoryComponent, QuoteComponent, WorkflowComponent, ProjectsComponent, SkillsComponent, ContactComponent, FooterComponent]
})
export class AppComponent {
  title = 'portfolio';
}
