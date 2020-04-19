import { Component, OnInit } from '@angular/core';
import {DetailsService} from 'src/app/services/details.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-pdetails',
  templateUrl: './pdetails.component.html',
  styleUrls: ['./pdetails.component.css']
})
export class PdetailsComponent implements OnInit {

  currentDetails = null;
  message = '';

  constructor(private detailsService: DetailsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id) {
    this.detailsService.get(id)
      .subscribe(
        data => {
          this.currentDetails = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status) {
    const data = {
      name: this.currentDetails.name,
      service: this.currentDetails.service,
      phone: this.currentDetails.phone,
      published: status
    };

    this.detailsService.update(this.currentDetails.id, data)
      .subscribe(
        response => {
          this.currentDetails.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial() {
    this.detailsService.update(this.currentDetails.id, this.currentDetails)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial() {
    this.detailsService.delete(this.currentDetails.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
  }


}
