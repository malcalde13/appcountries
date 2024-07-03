import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AboutPageComponent } from './shared/pages/aboutPage/aboutPage.component';
import { ContactPageComponent } from './shared/components/contactPage/contactPage.component';

//configuracion basica del router
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  // Aca indico que si el usuario ingresa a cualquier ruta que no sea http://localhost:4200/home
  // o http://localhost:4200/about, lo va a redireccionar al homne
  {
    path: '**',
    redirectTo: 'home'
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },

];

@NgModule({
  // Router principal de la app
  imports: [RouterModule.forRoot(routes),
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
