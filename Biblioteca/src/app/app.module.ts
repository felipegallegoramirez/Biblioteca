import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GaleriaPlantaComponent } from './galeria-planta/galeria-planta.component';
import { Routes, RouterModule } from '@angular/router';
import { VistaPlantasComponent } from './vista-plantas/vista-plantas.component';
import { InputComponent } from './input/input.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CentralinputComponent } from './centralinput/centralinput.component';
import { InputavesComponent } from './inputaves/inputaves.component';
import { InputinsectosComponent } from './inputinsectos/inputinsectos.component';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { GaleriaAvesComponent } from './galeria-aves/galeria-aves.component';
import { GaleriaInsectosComponent } from './galeria-insectos/galeria-insectos.component';
import { VistaAvesComponent } from './vista-aves/vista-aves.component';
import { VistaInsectosComponent } from './vista-insectos/vista-insectos.component';
import { InventarioComponent } from './inventario/inventario.component';
import { InputinventarioComponent } from './inputinventario/inputinventario.component';

const routes: Routes = [
  { path: 'GaleriaPlantas', component: GaleriaPlantaComponent },
  { path: 'VerPlantas/:id', component: VistaPlantasComponent },
  { path: 'GaleriaAves', component: GaleriaAvesComponent  },
  { path: 'VerAves/:id', component: VistaAvesComponent },
  { path: 'GaleriaInsectos', component: GaleriaInsectosComponent },
  { path: 'Inventario', component: InventarioComponent },
  { path: 'VerInsectos/:id', component: VistaInsectosComponent },
  { path: 'Input', component: CentralinputComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GaleriaPlantaComponent,
    VistaPlantasComponent,
    InputComponent,
    CentralinputComponent,
    InputavesComponent,
    InputinsectosComponent,
    GaleriaAvesComponent,
    GaleriaInsectosComponent,
    VistaAvesComponent,
    VistaInsectosComponent,
    InventarioComponent,
    InputinventarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash:true}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
