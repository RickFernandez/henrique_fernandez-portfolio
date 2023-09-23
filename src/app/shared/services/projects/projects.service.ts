// projects.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../../models/project';

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
      { image: 'assets/images/certificates/alura/Formação Aplicações web acessíveis.png', title: 'título 1',  description: 'descrição do projeto', technologys: ['html', 'css'], repositoryLink: 'repo-link', liveLink: 'live-link'},
      { image: 'assets/images/certificates/alura/Formação Aplicações web acessíveis.png', title: 'título 2',  description: 'descrição do projeto', technologys: ['angular', 'typescript', 'scss'], repositoryLink: 'repo-link'},
      { image: 'assets/images/certificates/alura/Formação Aplicações web acessíveis.png', title: 'título 2',  description: 'descrição do projeto', technologys: ['html', 'css', 'javascript'], repositoryLink: 'repo-link'},
      { image: 'assets/images/certificates/alura/Formação Aplicações web acessíveis.png', title: 'título 1',  description: 'descrição do projeto', technologys: ['html', 'css'], repositoryLink: 'repo-link', liveLink: 'live-link'},
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
