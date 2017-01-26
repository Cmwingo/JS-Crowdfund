import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { Project } from '../project.model';



@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  providers: [ProjectService]
})
export class ListViewComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  filterByCompleteness: string = "allProjects";
  neededFund;
  routeFinder: string = this.router.url;
  userAddProject: boolean = false;

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  onChange(optionFromMenu) {
  this.filterByCompleteness = optionFromMenu;
}

  goToDetailView(clickedProject) {
    clickedProject.neededFund = clickedProject.goalFund - clickedProject.currentFund;
    this.projectService.updateProject(clickedProject);
    this.router.navigate(['projects', clickedProject.$key]);
  }

  calculateNeededFund(passedProject) {
    this.neededFund = passedProject.goalFund - passedProject.currentFund;
  }

  userMakeNewProject() {
    if(this.userAddProject == true) {
      this.userAddProject = false;
    } else {
      this.userAddProject = true;
    }
}

  newToggle(newToggleFromChild) {
    console.log(newToggleFromChild);
    this.userAddProject = newToggleFromChild;
  }

}
