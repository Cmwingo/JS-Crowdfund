import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from './project.model';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
  this.projects = angularFire.database.list('projects');
}
  getProjects(){
    return this.projects;
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  getProjectById(projectId: string){
    return this.angularFire.database.object('projects/' + projectId);
  }

  updateProject(project) {
    var projectEntryInFirebase = this.getProjectById(project.$key);
    projectEntryInFirebase.update({name: project.name,
                                    summary: project.summary,
                                    neededFund: project.neededFund,
                                    rewards: project.rewards});
  }
  deleteProject(localProjectToDelete){
  var projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
  projectEntryInFirebase.remove();
}
}
