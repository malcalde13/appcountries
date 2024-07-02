import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AboutPageComponent } from './shared/pages/aboutPage/aboutPage.component';

//configuracion basica del router
const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  // Aca indico que si el usuario ingrea a cualquier ruta que no sea http://localhost:4200/home
  // o http://localhost:4200/about, lo va a redireccionar al homne
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  // Router principal de la app
  imports: [RouterModule.forRoot(routes),
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
