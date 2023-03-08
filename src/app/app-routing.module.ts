import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstituicoesComponent } from './pages/instituicoes/instituicoes.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'instituicoes', component: InstituicoesComponent },
  { path: 'aboutme', component: AboutmeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
