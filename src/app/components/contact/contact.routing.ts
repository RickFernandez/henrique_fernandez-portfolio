import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
];

export const ContactRoutes = RouterModule.forChild(routes);
