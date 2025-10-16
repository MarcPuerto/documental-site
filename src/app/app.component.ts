import { Component, ViewEncapsulation } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { SynopsisComponent } from './sections/synopsis/synopsis.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { TeamComponent } from './sections/team/team.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    SynopsisComponent,
    GalleryComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent
  ],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
    encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  title = 'documental-site';
}
