import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InstituicoesComponent } from './pages/instituicoes/instituicoes.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { ProjectsComponent } from './pages/projects/projects.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'instituicoes', component: InstituicoesComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
