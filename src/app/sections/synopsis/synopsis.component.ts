import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-synopsis',
  standalone: true,
  imports: [],
  templateUrl: './synopsis.component.html',
  styleUrl: './synopsis.component.css'
})
export class SynopsisComponent {
  quotes = [
    '"Even after I am gone, the corals will still be here..."',
    '"But their vibrant colors will fade if we do not protect them."',
    '"Every small action we take today can give them life tomorrow."',
    '"They whisper stories of oceans long before us, waiting to be heard."',
    '"Our hands can heal or harm, and the corals feel both."',
    '"If we cherish them, they will glow again, brighter than ever."',
  ];

  visibleQuotes: string[] = [];
  activeIndex = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  scrollTo(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  showNextQuote() {
    this.visibleQuotes.push(this.quotes[this.activeIndex]);

    // Limit visible quotes
    if (this.visibleQuotes.length > 4) {
      this.visibleQuotes.shift();
    }

    this.activeIndex++;

    // Only schedule the next one if there are still quotes left
    if (this.activeIndex < this.quotes.length) {
      setTimeout(() => this.showNextQuote(), 5000);
    }
  }

  getOpacity(index: number) {
    const total = this.visibleQuotes.length;
    return 0.3 + (index / total) * 0.7;
  }
}
