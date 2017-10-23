import { Job, Stat } from './../models/job';
import { JobService } from './../services/job/job.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import 'rxjs/add/Observable/forkJoin';
import { Observable } from 'rxjs/Observable';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-job-form-create',
  templateUrl: './job-form-create.component.html',
  styleUrls: ['./job-form-create.component.css']
})
export class JobFormCreateComponent implements OnInit {
  states;
  isStateDisabled = true;
  isEmailApply = false;
  salaryTypes: any[];
  jobBoards: any[];
  job: Job = {
    id: 0,
    salary: null,
    title: "",
    employmentTypeId: null,
    categoryId: null,
    jobDescription: "",
    selectedOccupation: [],
    jobRequirements: "",
    salaryTypeId: null,
    countryId: null,
    stateId: null,
    city: "",
    zipCode: "",
    address: "",
    minimumExperience: null,
    maximumExperience: null,
    companyName: "",
    jobBoardId: null,
    emailTo: "",
    activationDate: "",
    expirationDate: "",
    schedulingPod: null,
    officeId: null,
    division: "",
    author: "",
    apscl: null,
    bob: null,
    intvs: null,
    intvs2: null,
    isBestPerforming: false,
    isEverGreen: false,
    stat: {
      apsCl: null,
      bob: null,
      intvs: null,
      intvs2: null
    }
  };
  countriesAndStates: any[];
  employmentTypes: any[];
  currencies = ["USD", "CAD"];
  categories: any[];
  occupations: any[];
  form;
  constructor(
    fb: FormBuilder,
    private jobService: JobService,
    private toastyService: ToastyService,
    private route: ActivatedRoute,
    private router: Router) {
    route.params.subscribe(p => {
      this.job.id = +p['id'];
    });
    this.form = fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      employmentTypeId: ['', Validators.required],
      selectedOccupation: ['', []],
      categoryId: ['', [Validators.required]],
      jobDescription: ['', [Validators.required]],
      jobRequirements: ['', [Validators.required]],
      salary: ['', [Validators.pattern("[0-9,]*")]],
      currency: ['', []],
      salaryTypeId: ['', [Validators.required]],
      countryId: ['', [Validators.required]],
      stateId: [{ value: '', disabled: this.isStateDisabled }, [Validators.required]],
      city: ['', [Validators.required, Validators.maxLength(60)]],
      zipCode: ['', [Validators.required, Validators.maxLength(10)]],
      address: ['', [Validators.maxLength(120)]],
      maximumExperience: ['', [Validators.pattern("[0-3]?[0-9]")]],
      minimumExperience: ['', [Validators.pattern("[0-3]?[0-9]")]],
      companyName: ['', [Validators.required, Validators.maxLength(120)]],
      activationDate: ['', [Validators.required, Validators.pattern("")]],
      expirationDate: ['', [Validators.required, Validators.pattern("")]],
      jobBoardId: ['', [Validators.required]],
      schedulingPod: ['', [Validators.required, Validators.pattern("[0-9]*")]],
      officeId: ['', [Validators.required, Validators.pattern("[0-9]*")]],
      division: ['', [Validators.required]],
      emailTo: ['', [Validators.email]],
      author: ['', []],
      isBestPerforming: ['', []],
      isEverGreen: ['', []],
      stat: fb.group({
        apscl: ['', [Validators.pattern("[0-9]*")]],
        bob: ['', [Validators.pattern("[0-9]*")]],
        intvs: ['', [Validators.pattern("[0-9]*")]],
        intvs2: ['', [Validators.pattern("[0-9]*")]],
      })
    });
  }

  get salary() { return this.form.get('salary'); }
  get title() { return this.form.get('title'); }
  get employmentTypeId() { return this.form.get('employmentTypeId'); }
  get categoryId() { return this.form.get('categoryId'); }
  get jobDescription() { return this.form.get('jobDescription'); }
  get jobRequirements() { return this.form.get('jobRequirements'); }
  get salaryTypeId() { return this.form.get('salaryTypeId'); }
  get countryId() { return this.form.get('countryId'); }
  get stateId() { return this.form.get('stateId'); }
  get city() { return this.form.get('city'); }
  get zipCode() { return this.form.get('zipCode'); }
  get address() { return this.form.get('address'); }
  get minimumExperience() { return this.form.get('minimumExperience'); }
  get maximumExperience() { return this.form.get('maximumExperience'); }
  get companyName() { return this.form.get('companyName'); }
  get jobBoardId() { return this.form.get('jobBoardId'); }
  get emailTo() { return this.form.get('emailTo'); }
  get activationDate() { return this.form.get('activationDate'); }
  get expirationDate() { return this.form.get('expirationDate'); }
  get schedulingPod() { return this.form.get('schedulingPod'); }
  get officeId() { return this.form.get('officeId'); }
  get division() { return this.form.get('division'); }
  get author() { return this.form.get('stat.author') };
  get apscl() { return this.form.get('stat.apscl') };
  get bob() { return this.form.get('stat.bob') };
  get intvs() { return this.form.get('stat.intvs') };
  get intvs2() { return this.form.get('stat.intvs2') };
  get isBestPerformin() { return this.form.get('isBestPerformin') };
  get isEverGreen() { return this.form.get('isEverGreen') };

  ngOnInit(): void {
    var sources = [
      this.jobService.getSalaryTypes(),
      this.jobService.getJobBoards(),
      this.jobService.getCategories(),
      this.jobService.getOccupations(),
      this.jobService.getCountriesWithStates(),
      this.jobService.getEmploymentTypes(),
    ];

    if (this.job.id) {
      sources.push(this.jobService.getJob(this.job.id));
    }

    Observable.forkJoin(sources).subscribe(data => {
      this.salaryTypes = data[0];
      this.jobBoards = data[1];
      this.categories = data[2];
      this.occupations = data[3];
      this.countriesAndStates = data[4];;
      this.employmentTypes = data[5];
      if (this.job.id) {
        this.enableStateInput();
        this.job.stateId = 2;
        this.job = data[6];
      }

      this.job.id = 1;

    }, err => {
      if (err.status == 404)
        this.router.navigate(['/not-found'])
    });
  }

  populateStates(countryId) {
    var country = this.countriesAndStates.find(m => m.id == countryId);
    if (!country) return;
    this.states = this.countriesAndStates.find(m => m.id == countryId).states;
    this.enableStateInput();
  }

  enableStateInput(): void {
    let stateInput = this.form.get('stateId');
    stateInput.enable();
  }

  getEmailApplyStatus(jobBoardId: number) {
    var board = this.jobBoards.find(j => j.id == jobBoardId);
    if (board == null) return;
    this.isEmailApply = board.isEmailApply;
    if (this.isEmailApply) {
      this.form.get('emailTo').setValidators([Validators.required, Validators.email]);
      this.form.get('emailTo').updateValueAndValidity();
    } else {
      this.form.get('emailTo').setValidators([Validators.email]);
      this.form.get('emailTo').updateValueAndValidity();
    }
  }

  submit() {
    var result = this.jobService.create(this.form.value)
      .subscribe(
      x => console.log(x));
  };
}

