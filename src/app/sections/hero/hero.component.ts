import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
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

  ngOnInit() {
    // Only run animations and timers in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.showNextQuote();
    }
  }

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
