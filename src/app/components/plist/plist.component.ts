import { Component, OnInit } from '@angular/core';
import {CustService} from 'src/app/services/cust.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistComponent implements OnInit {
  tutorials: any;
  currentDetails = null;
  currentIndex = -1;
  name = '';
  constructor(private detailsService: CustService) { }

  ngOnInit() {
    this.retrieveTutorials();
  }

  retrieveTutorials() {
    this.detailsService.getAll()
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveTutorials();
    this.currentDetails = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial, index) {
    this.currentDetails = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials() {
    this.detailsService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTutorials();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle() {
    this.detailsService.findByTitle(this.name)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}
