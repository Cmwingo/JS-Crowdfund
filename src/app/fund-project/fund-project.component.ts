import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-fund-project',
  templateUrl: './fund-project.component.html',
  styleUrls: ['./fund-project.component.css'],
  providers: [ProjectService]
})
export class FundProjectComponent implements OnInit {
  @Input() projectToFund;
  toggleFund: boolean = false;
  // project: Promise<Project> = new Promise((resolve,reject) => resolve(this.projectToFund));
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  toggleFundPanel(clickedFundHeading) {
    if(this.toggleFund == true) {
      this.toggleFund = false;
    } else {
      this.toggleFund = true;
    }
}

  fundProject(project, fundAmount) {
    // project.then((res) => console.log(res));
    // console.log(project);
    let projectBeingFunded = Promise.resolve(project);
    console.log("Project" + projectBeingFunded.then((project) => console.log(project)));
    // projectBeingFunded.currentFund += fundAmount;
    // projectBeingFunded.neededFund = projectBeingFunded.goalFund - projectBeingFunded.currentFund;
    // console.log(projectBeingFunded.currentFund);
    // this.projectService.updateProject(projectToFund);
  }


}
