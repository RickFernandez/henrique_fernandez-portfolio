import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillCardComponent } from './skills/skill-card/skill-card.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperienceItemComponent } from './experiences/experience-item/experience-item/experience-item.component';
import { CertifiedComponent } from './certified/certified.component';
import { CertifiedCardComponent } from './certified/certified-card/certified-card.component';

@NgModule({
  declarations: [
    BioComponent,
    SkillsComponent,
    SkillCardComponent,
    ExperiencesComponent,
    ExperienceItemComponent,
    CertifiedComponent,
    CertifiedCardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
