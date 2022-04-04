import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroTimesComponent } from './cadastro-times/cadastro-times.component';
import { GraficoTimesComponent } from './grafico-times/grafico-times.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'grafico-times', component: GraficoTimesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-times', component: CadastroTimesComponent, canActivate : [AuthGuard]},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
