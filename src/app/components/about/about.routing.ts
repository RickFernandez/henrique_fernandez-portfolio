import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CertifiedComponent } from './certified/certified.component';

const routes: Routes = [
    { path: 'about-me', redirectTo: 'about-me/bio', pathMatch: 'full' },
    { path: 'about-me/bio', component: BioComponent },
    { path: 'about-me/skills', component: SkillsComponent },
    { path: 'about-me/experiences', component: ExperiencesComponent },
    { path: 'about-me/certifieds', component:  CertifiedComponent},
];

export const AboutRoutes = RouterModule.forChild(routes);
