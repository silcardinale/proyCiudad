import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadesComponent } from './pages/ciudades/ciudades.component';
import { PipePercentPipe } from './pipes/pipe-percent.pipe';
import { PipeGradosPipe } from './pipes/pipe-grados.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CiudadesComponent,
    PipePercentPipe,
    PipeGradosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
