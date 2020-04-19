import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  tutorial = {
    name: '',
    service: '',
    phone: '',
    published: false  
  };
  submitted = false;


  constructor(private detailService: DetailsService) { }

  ngOnInit() {
  }

  saveTutorial() {
    const data = {
      name: this.tutorial.name,
      service: this.tutorial.service,
      phone: this.tutorial.phone
    };

    this.detailService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      name: '',
    service: '',
    phone: '',
    published: false
    };
  }

}
