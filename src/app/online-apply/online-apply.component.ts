import { StatsPendingComponent } from './../stats-pending/stats-pending.component';
import { Job } from './../models/job';
import { JobService } from './../services/job/job.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-online-apply',
  templateUrl: './online-apply.component.html',
  styleUrls: ['./online-apply.component.css']
})
export class OnlineApplyComponent implements OnInit {
  job: any = {
    id: 0,
    title: "",
    country: "",
    state: "",
    category: "",
    employmentType: "",
    jobRequirements: "",
    jobDescription: ""
  }

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router) {
    route.params.subscribe(p => {
      this.job.id = +p['id'];
    });
  }

  ngOnInit() {
    this.jobService.getJob(this.job.id)
      .subscribe(j => this.job = j);
  }
}
