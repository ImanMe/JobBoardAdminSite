import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BoardService {

  private endpoint = 'http://jobboardadminapi20170917094805.azurewebsites.net/api/';
  constructor(private http: Http) { }

  getBoards() {
    return this.http.get(this.endpoint + 'jobboards')
      .map(res => res.json()
      );
  }
}
