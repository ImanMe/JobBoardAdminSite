import { BoardService } from './services/board/board.service';
import { JobService } from './services/job/job.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AppComponent } from './app.component';
import { JobFormCreateComponent } from './job-form-create/job-form-create.component';
import { JobListComponent } from './job-list/job-list.component';
import { ToastyModule } from 'ng2-toasty'
import { HttpModule } from '@angular/http';
import { SummaryPipe } from './summary.pipe';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardFormComponent } from './board-form/board-form.component';
import { ReportsComponent } from './reports/reports.component';
import { ActiveReportComponent } from './active-report/active-report.component';
import { InactiveReportComponent } from './inactive-report/inactive-report.component';
import { EvergreenReportComponent } from './evergreen-report/evergreen-report.component';
import { CreatedbyReportComponent } from './createdby-report/createdby-report.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { UserAccessComponent } from './user-access/user-access.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StatsPendingComponent } from './stats-pending/stats-pending.component';
import { OnlineApplyComponent } from './online-apply/online-apply.component';
//import { AppErrorHandler } from './app.error-handler';

@NgModule({
  declarations: [
    AppComponent,
    JobFormCreateComponent,
    JobListComponent,
    SummaryPipe,
    NavmenuComponent,
    PaginationComponent,
    BoardListComponent,
    BoardFormComponent,
    ReportsComponent,
    ActiveReportComponent,
    InactiveReportComponent,
    EvergreenReportComponent,
    CreatedbyReportComponent,
    ApplicantsComponent,
    UserAccessComponent,
    NotFoundComponent,
    StatsPendingComponent,
    OnlineApplyComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastyModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'admin/jobs', pathMatch: 'full' },
      { path: 'admin/jobs', component: JobListComponent },
      { path: 'admin/jobs/create', component: JobFormCreateComponent },
      { path: 'admin/jobs/edit/:id', component: JobFormCreateComponent },
      { path: 'admin/jobs/clone/:id', component: JobFormCreateComponent },
      { path: 'admin/boards', component: BoardListComponent },
      { path: 'admin/boards/create', component: BoardFormComponent },
      { path: 'admin/stats', component: StatsPendingComponent },
      { path: 'admin/reports', component: ReportsComponent },
      { path: 'admin/applicants', component: ApplicantsComponent },
      { path: 'admin/users', component: UserAccessComponent },
      { path: 'jobs/onlineapply/:id', component: OnlineApplyComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: '**', redirectTo: 'admin/jobs' }
    ])
  ],
  providers: [
    //{ provide: ErrorHandler, useClass: AppErrorHandler },
    JobService,
    BoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
