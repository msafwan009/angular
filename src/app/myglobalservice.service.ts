import { Injectable } from '@angular/core';

@Injectable()
export class MyglobalserviceService {
  constructor() {
    console.log('Service Object Created');
   }

  public fullName:string = 'Nikhil';

  calaculateIntrest(principal,intrestrate)
  {
    return (principal * intrestrate) / 100;
  }

}
