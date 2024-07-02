import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-home-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>homePage works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HomePageComponent { }
