import { BoardService } from './services/board/board.service';
import { JobService } from './services/job/job.service';
import { BrowserModule } from '@angular/platform-browser';
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
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'admin/jobs', pathMatch: 'full' },
      { path: 'admin/jobs', component: JobListComponent },
      { path: 'admin/jobs/create', component: JobFormCreateComponent },
      { path: 'admin/boards', component: BoardListComponent },
      { path: 'admin/boards/create', component: BoardFormComponent },
      { path: 'admin/reports', component: ReportsComponent },
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
