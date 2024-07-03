import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'sahred-contact-page',
  templateUrl: './contactPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ContactPageComponent { }
