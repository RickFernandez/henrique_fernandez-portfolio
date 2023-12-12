import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/Project';
import { ProjectsService } from 'src/app/components/projects/projects.service';

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
