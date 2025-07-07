import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const myCarousel = document.getElementById('carouselExampleIndicators');
      if (myCarousel) {
        new bootstrap.Carousel(myCarousel, {
          interval: 3000,
          wrap: true
        });
      }
    }
  }
}
