// projects.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../../models/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = [];
  private filterOptionsSubject = new BehaviorSubject<string[]>([]);

  constructor() {
    this.loadInitialProjects();
  }

  loadInitialProjects() {
    this.projects = [
      { image: 'assets/images/projects/portfolio-profissional.png', title: 'Henrique Fernandez - Developer',  description: 'Site profissional', technologys: ['wordpress', 'elementor'], liveLink: 'https://www.henrique-fernandez.site'},
      { image: 'assets/images/projects/doctorcare.png', title: 'DoctorCare',  description: 'Landing Page da assistência médica DoctorCare', technologys: ['html', 'caa', 'javascript'], repositoryLink: 'https://github.com/RickFernandez/DoctorCare.git', liveLink: 'https://hf-doctorcare.netlify.app/'},
      { image: 'assets/images/projects/wine4iu.png', title: 'Wine4iu',  description: 'E-commerce de vinho', technologys: ['Plataforma nuvemshop'], liveLink: 'https://wine4iu.lojavirtualnuvem.com.br/'},
      { image: 'assets/images/projects/vidraçaria-pereira.png', title: 'Vidraçaria Pereira',  description: 'Landing Page para divulgação da Vidraçaria Pereira', technologys: ['html', 'css'], liveLink: 'https://vidracariapereira.com.br/'},
      { image: 'assets/images/projects/elvas_dantas-advocacia.png', title: 'Elvas Dantas Advocacia',  description: 'Landing Page da advocacia Elvas Dantas', technologys: ['wordpress', 'elementor'], liveLink: 'https://www.henrique-fernandez.site/advocacia/'},
      { image: 'assets/images/projects/alura-viagens.png', title: 'Alura Viagens',  description: 'Agência de viagens Alura-Viagens', technologys: ['wordpress', 'elementor'], liveLink: 'https://www.henrique-fernandez.site/alura-viagens/'},
      { image: 'assets/images/projects/lp-smartwatch.png', title: 'Smartwatch',  description: 'Página de vendas para o produto Smartwatch', technologys: ['wordpress', 'elementor'], liveLink: 'https://www.henrique-fernandez.site/smartwatch/'},
      { image: 'assets/images/projects/hfood.png', title: 'HFood',  description: 'Food commerce. Inspirado no Ifood', technologys: ['angular', 'typescript', 'scss'], repositoryLink: 'https://github.com/RickFernandez/hfood.git', liveLink: 'https://hf-hfood.netlify.app/'},
      { image: 'assets/images/projects/meteora-store.png', title: 'Meteora Store',  description: 'E-commece de roupas', technologys: ['angular', 'typescript', 'scss'], repositoryLink: 'https://github.com/RickFernandez/meteora-store.git', liveLink: 'https://hf-meteora-store.netlify.app/'},
    ];
  }

  getInitialProjects(): Project[] {
    return this.projects;
  }

  getFilterOptions(): Observable<string[]> {
    return this.filterOptionsSubject.asObservable();
  }

  setFilterOptions(selectedFilters: string[]): void {
    this.filterOptionsSubject.next(selectedFilters);
  }

  filterProjects(selectedFilters: string[]): Project[] {
    if (selectedFilters.length === 0) {
      return this.projects;
    } else {
      return this.projects.filter((project) =>
        project.technologys.some((tech) => selectedFilters.includes(tech))
      );
    }
  }
}
