import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/models/project';
import { ProjectsService } from '../../components/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getInitialProjects();

    this.projectService.getFilterOptions().subscribe((selectedFilters) => {
      this.filterProjects(selectedFilters);
    });
  }

  filterProjects(selectedFilters: string[]): void {
    this.projects = this.projectService.filterProjects(selectedFilters);
  }
}
