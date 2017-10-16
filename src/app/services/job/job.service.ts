import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JobService {
  private endpoint = 'http://jobboardadminapi20170917094805.azurewebsites.net/api/';
  constructor(private http: Http) { }

  getJobs(filter) {
    return this.http.get(this.endpoint + 'jobs' + '?' + this.toQueryString(filter))
      .map(res => res.json()
      );
  }

  getJobBoards(filter) {
    return this.http.get(this.endpoint + 'jobboards')
      .map(res => res.json()
      );
  }

  toQueryString(obj) {
    var parts = [];
    for (var property in obj) {
      var value = obj[property];
      if (value != null && value != undefined)
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
    }
    return parts.join('&');
  }
}
