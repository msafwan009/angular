import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-bank-data',
  templateUrl: './bank-data.component.html',
  styleUrls: ['./bank-data.component.css']
})
export class BankDataComponent implements OnInit {

 
  constructor(private mysericeObj:HttpServiceService) 
  {
    this.displayFood();
  }
  foodDetails;
  bookDetails;

  displayFood()
  {  
      this.mysericeObj.getFoodData().subscribe(
                        (result) => 
                        { 
                          console.log('Got the data Yeyy' + result);
                          this.foodDetails = result;
                          console.log(this.foodDetails);
                        },
                        (errorInfo) => { console.log('I faced an Error ' + errorInfo) },
                        () => {console.log('Method call is completed')});    
  }

  displayBooks()
  {
    this.foodDetails = this.mysericeObj.getBooksData();
  }
  ngOnInit() {
  }


}
