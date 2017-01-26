import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent implements OnInit {
  @Output() toggleNewFormEmitter = new EventEmitter();
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, summary: string, goalFund: number, rewards: string) {
    var newProject: Project = new Project(name, summary, goalFund, rewards);
    this.projectService.addProject(newProject);
    this.toggleNewFormEmitter.emit();
  }
}
