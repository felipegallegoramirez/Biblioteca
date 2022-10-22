import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GaleriaPlantaComponent } from './galeria-planta/galeria-planta.component';
import { Routes, RouterModule } from '@angular/router';
import { VistaPlantasComponent } from './vista-plantas/vista-plantas.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'GaleriaPlantas', component: GaleriaPlantaComponent },
  { path: 'VerPlantas', component: VistaPlantasComponent },
  { path: 'About-us', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GaleriaPlantaComponent,
    VistaPlantasComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
