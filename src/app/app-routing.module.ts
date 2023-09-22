import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutRoutes } from './components/about/about.routing';
import { ProjectRoutes } from './components/projects/project.routing';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AboutRoutes, ProjectRoutes],
  exports: [RouterModule]
})
export class AppRoutingModule { }
