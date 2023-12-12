import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
];

export const ProjectRoutes = RouterModule.forChild(routes);
