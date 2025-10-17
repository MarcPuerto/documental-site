import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { SynopsisComponent } from './sections/synopsis/synopsis.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { TeamComponent } from './sections/team/team.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

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
export class AppComponent  implements OnInit{
   constructor(
  private titleService: Title,
  private meta: Meta,
  @Inject(PLATFORM_ID) private platformId: Object
) {}

ngOnInit() {
  

  if (isPlatformBrowser(this.platformId)) {
    // ✅ This code runs only in the browser
    this.titleService.setTitle('Island of Swallows – Coral Documentary');
    this.meta.addTags([
      { name: 'description', content: 'A poetic documentary capturing coral restoration and human connection.' },
      { name: 'author', content: 'Kaito Sashihara Martinez & Jenny Jo Stokka' },
      { name: 'keywords', content: 'coral, ocean, documentary, restoration, film, environment' },
      { property: 'og:title', content: 'Island of Swallows – Coral Documentary' },
      { property: 'og:description', content: 'A poetic film about the future of coral and those who protect it.' },
      { property: 'og:image', content: 'https://example.com/assets/thumbnail.jpg' },
      { property: 'og:url', content: 'https://islandofswallows.com' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@kaito.sashihara' }
    ]);
  }
}


  
}
