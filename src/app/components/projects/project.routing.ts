import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
];

export const ProjectRoutes = RouterModule.forChild(routes);
