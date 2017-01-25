import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  @Input() selectedProject;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  editProject(project) {
    this.projectService.updateProject(project);
  }

  beginDeletingProject(projectToDelete) {
    if(confirm("Are you sure you want to delete this project from the list?")){
  this.projectService.deleteProject(projectToDelete);
  }
}
}
