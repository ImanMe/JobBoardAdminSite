import { PaginationComponent } from './../pagination/pagination.component';
import { JobService } from './../services/job/job.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: any = {};
  isTitleExpanded = false;
  titleLength = 10;
  isEmailExpanded = false;
  emailLength = 10;
  isCreatedByExpanded = false;
  createdByLength = 10;
  onlineUrl = 'http://board.thejobwindow.com/home/onlineapply/';
  private readonly PAGE_SIZE = 10;
  queryResult: any = {};
  query: any = { pageSize: this.PAGE_SIZE };
  statuses = [
    { value: true, name: "Active" },
    { value: false, name: "Expired" }
  ];
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.populateJobs();
  }

  private populateJobs() {
    this.jobService.getJobs(this.query)
      .subscribe(jobs => this.jobs = jobs);
  }

  onFilterChange() {
    this.populateJobs();
  }

  sortBy(columnName) {
    if (this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }
    this.populateJobs();
  }

  onPageChange(page) {
    this.query.page = page;
    this.populateJobs();
  }

  titleToggle() {
    this.isTitleExpanded = !this.isTitleExpanded;
    this.titleLength = this.isTitleExpanded ? 1000 : 10;
  }

  emailToggle() {
    this.isEmailExpanded = !this.isEmailExpanded;
    this.emailLength = this.isEmailExpanded ? 1000 : 10;
  }

  createdByToggle() {
    this.isCreatedByExpanded = !this.isCreatedByExpanded;
    this.createdByLength = this.isCreatedByExpanded ? 1000 : 10;
  }
}
