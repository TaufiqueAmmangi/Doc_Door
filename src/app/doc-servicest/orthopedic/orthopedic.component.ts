import { Component, OnInit } from '@angular/core';
import { CustService } from 'src/app/services/cust.service';
@Component({
  selector: 'app-orthopedic',
  templateUrl: './orthopedic.component.html',
  styleUrls: ['./orthopedic.component.css']
})
export class OrthopedicComponent implements OnInit {


  cust = {
    name: '',
    service: '',
    phone: '',
    city: ''  
  };
  submitted = false;
   
  constructor(private custService: CustService) { }

  ngOnInit() {
  }

  saveCust() {
    const data = {
      name: this.cust.name,
      service: this.cust.service,
      phone: this.cust.phone
    };

    this.custService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCust() {
  
    this.cust = {
      name: '',
    service: '',
    phone: '',
    city: ''
    };
  }

}
