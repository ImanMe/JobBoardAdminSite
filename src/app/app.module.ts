import { BoardService } from './services/board/board.service';
import { JobService } from './services/job/job.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AppComponent } from './app.component';
import { JobFormCreateComponent } from './job-form-create/job-form-create.component';
import { JobListComponent } from './job-list/job-list.component';
import { HttpModule } from '@angular/http';
import { SummaryPipe } from './summary.pipe';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardFormComponent } from './board-form/board-form.component';
import { ReportsComponent } from './reports/reports.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ActiveReportComponent } from './active-report/active-report.component';
import { InactiveReportComponent } from './inactive-report/inactive-report.component';
import { EvergreenReportComponent } from './evergreen-report/evergreen-report.component';
import { CreatedbyReportComponent } from './createdby-report/createdby-report.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { UserAccessComponent } from './user-access/user-access.component';
import { EditorModule } from 'primeng/primeng';
import { NotFoundComponent } from './not-found/not-found.component';

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
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'admin/jobs', pathMatch: 'full' },
      { path: 'admin/jobs', component: JobListComponent },
      { path: 'admin/jobs/create', component: JobFormCreateComponent },
      { path: 'admin/boards', component: BoardListComponent },
      { path: 'admin/boards/create', component: BoardFormComponent },
      { path: 'admin/reports', component: ReportsComponent },
      { path: 'admin/applicants', component: ApplicantsComponent },
      { path: 'admin/users', component: UserAccessComponent },
      { path: '**', redirectTo: 'admin/jobs' }
    ])
  ],
  providers: [
    JobService,
    BoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
