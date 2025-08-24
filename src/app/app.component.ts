import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AboutComponent from './components/about/about.component';
import ContactComponent from './components/contact/contact.component';
import HeaderComponent from './components/header/header.component';
import HeroComponent from './components/hero/hero.component';
import ProjectsComponent from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [AboutComponent, ContactComponent, HeaderComponent, HeroComponent, ProjectsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
}
