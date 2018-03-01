import { Injectable } from '@angular/core';
import {   HttpClient } from '@angular/common/http';

import { forkJoin } from 'rxjs/observable/forkJoin';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HttpServiceService {

  constructor( private myhttpobj:HttpClient) { }
  getFoodData()
  {
      return this.myhttpobj.get('http://localhost:3000/api/food');
  }
  getBooksData()
  {
    return this.myhttpobj.get('http://localhost:3000/api/books');
  }
  getMoviesandbooks()
  {
    return Observable.forkJoin(
    
      this.myhttpobj.get('http://localhost:3000/api/food')
    )
  }

}
