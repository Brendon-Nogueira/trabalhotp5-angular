import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficoTimesComponent } from './grafico-times/grafico-times.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'grafico-times', component: GraficoTimesComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
