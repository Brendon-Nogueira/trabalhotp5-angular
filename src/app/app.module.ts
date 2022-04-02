import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficoTimesComponent } from './grafico-times/grafico-times.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {  NgChartsModule } from 'ng2-charts';
import { CadastroTimesComponent } from './cadastro-times/cadastro-times.component';
import { AuthService } from './login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    GraficoTimesComponent,
    LoginComponent,
    HomeComponent,
    CadastroTimesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
