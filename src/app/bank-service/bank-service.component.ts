import { Component, OnInit } from '@angular/core';
import { MyglobalserviceService } from '../myglobalservice.service';

@Component({
  selector: 'app-bank-service',
  templateUrl: './bank-service.component.html',
  styleUrls: ['./bank-service.component.css']
})
export class BankServiceComponent implements OnInit {

  constructor() {
   this.displayintrest();
   }
  myseviceObj:MyglobalserviceService;
displayintrest()
{
//this.myseviceObj = new MyglobalserviceService();

  this.myseviceObj = new MyglobalserviceService();
  console.log(this.myseviceObj.calaculateIntrest(10000,5));
}
set newName(value)
{
  this.myseviceObj.fullName = value;
}
ngOnInit() {
}

}
