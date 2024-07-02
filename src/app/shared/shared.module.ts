import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    RouterModule
  ],

  exports: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    RouterModule
  ]
})
export class SharedModule { }
