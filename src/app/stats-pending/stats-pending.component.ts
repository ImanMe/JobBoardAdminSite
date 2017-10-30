import { JobService } from './../services/job/job.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-pending',
  templateUrl: './stats-pending.component.html',
  styleUrls: ['./stats-pending.component.css']
})
export class StatsPendingComponent implements OnInit {
  jobs;
  constructor(private jobService: JobService) { }

  ngOnInit() {

  }

}
