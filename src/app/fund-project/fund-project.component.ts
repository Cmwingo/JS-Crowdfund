import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-project',
  templateUrl: './fund-project.component.html',
  styleUrls: ['./fund-project.component.css']
})
export class FundProjectComponent implements OnInit {
  toggleFund: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleFundPanel(clickedFundHeading) {
    if(this.toggleFund == true) {
      this.toggleFund = false;
    } else {
      this.toggleFund = true;
    }
}
}
