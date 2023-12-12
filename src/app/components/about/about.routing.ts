import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CertifiedComponent } from './certified/certified.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: 'about-me',
    redirectTo: 'about-me/bio',
    pathMatch: 'full'
  },
  {
    path: 'about-me',
    canActivate: [AuthGuard],
    children: [
      { path: 'bio', component: BioComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'experiences', component: ExperiencesComponent },
      { path: 'certifieds', component: CertifiedComponent },
    ]
  }
];

export const AboutRoutes = RouterModule.forChild(routes);
