import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-job-form-create',
  templateUrl: './job-form-create.component.html',
  styleUrls: ['./job-form-create.component.css']
})
export class JobFormCreateComponent {
  states;
  isStateDisabled = true;
  isEmailApply = false;
  form = new FormGroup({
    title: new FormControl('', [Validators.required,
    Validators.maxLength(255), Validators.minLength(3)]),

    employmentTypeId: new FormControl('', [Validators.required]),

    selectedOccupation: new FormControl('', []),

    categoryId: new FormControl('', [Validators.required]),

    jobDescription: new FormControl('', [Validators.required]),

    jobRequirements: new FormControl('', [Validators.required]),

    salary: new FormControl('', [Validators.pattern("[0-9,]*")]),

    currency: new FormControl('', []),

    salaryTypeId: new FormControl('', [Validators.required]),

    countryId: new FormControl('', [Validators.required]),

    stateId: new FormControl({ value: '', disabled: this.isStateDisabled }, [Validators.required]),

    city: new FormControl('', [Validators.required, Validators.maxLength(60)]),

    zipCode: new FormControl('', [Validators.required, Validators.maxLength(10)]),

    address: new FormControl('', [Validators.maxLength(120)]),

    maximumExperience: new FormControl('', [Validators.pattern("[0-3]?[0-9]")]),

    minimumExperience: new FormControl('', [Validators.pattern("[0-3]?[0-9]")]),

    companyName: new FormControl('', [Validators.required, Validators.maxLength(120)]),

    jobBoardId: new FormControl('', [Validators.required]),

    emailTo: new FormControl('', [Validators.email]),
  });

  get salary() {
    return this.form.get('salary');
  }

  get title() {
    return this.form.get('title');
  }

  get employmentTypeId() {
    return this.form.get('employmentTypeId');
  }

  get categoryId() {
    return this.form.get('categoryId');
  }

  get jobDescription() {
    return this.form.get('jobDescription');
  }

  get jobRequirements() {
    return this.form.get('jobRequirements');
  }

  get salaryTypeId() {
    return this.form.get('salaryTypeId');
  }

  get countryId() {
    return this.form.get('countryId');
  }

  get stateId() {
    return this.form.get('stateId');
  }

  get city() {
    return this.form.get('city');
  }

  get zipCode() {
    return this.form.get('zipCode');
  }

  get address() {
    return this.form.get('address');
  }

  get minimumExperience() {
    return this.form.get('minimumExperience');
  }

  get maximumExperience() {
    return this.form.get('maximumExperience');
  }

  get companyName() {
    return this.form.get('companyName');
  }

  get jobBoardId() {
    return this.form.get('jobBoardId');
  }

  get emailTo() {
    return this.form.get('emailTo');
  }

  create() {
    console.log('created');
  }

  populateStates(countryId) {
    this.states = this.countriesAndStates.find(m => m.id == countryId).states;
    this.enableStateInpt();
  }

  enableStateInpt(): void {
    let stateInput = this.form.get('stateId');
    stateInput.enable();
  }

  getEmailApplyStatus(jobBoardId: number) {
    this.isEmailApply = this.jobBoards.find(j => j.id == jobBoardId).isEmailApply;
    if (this.isEmailApply) {
      this.form.get('emailTo').setValidators([Validators.required, Validators.email]);
      this.form.get('emailTo').updateValueAndValidity();
    } else {
      this.form.get('emailTo').setValidators([Validators.email]);
      this.form.get('emailTo').updateValueAndValidity();
    }

  }

  employmentTypes = [
    { id: 1, name: "Full Time" },
    { id: 2, name: "Part Time" },
    { id: 3, name: "Intern" }
  ];

  occupations = [
    { id: 1, name: "occupation1" },
    { id: 2, name: "occupation2" },
    { id: 3, name: "occupation3" }
  ];

  categories = [
    { id: 1, name: "category1" },
    { id: 2, name: "category2" },
    { id: 3, name: "category3" }
  ];

  currencies = [
    { name: "USD" }, { name: "CAD" }
  ];

  salaryTypes = [
    { id: 1, name: "Per Hour" },
    { id: 2, name: "Per Week" },
  ];

  jobBoards = [
    { id: 1, isOnllineApply: true, isEmailApply: false, name: "JobBoard1" },
    { id: 2, isOnllineApply: false, isEmailApply: true, name: "JobBoard2" },
    { id: 3, isOnllineApply: false, isEmailApply: true, name: "JobBoard3" },
    { id: 4, isOnllineApply: true, isEmailApply: false, name: "JobBoard4" },
  ];

  countriesAndStates = [
    {
      id: 1,
      name: "United States",
      code: "US",
      states: [
        {
          id: 1,
          name: "New York",
          code: "NY"
        },
        {
          id: 2,
          name: "Alabama",
          code: "AL"
        }
      ]
    },
    {
      id: 2,
      name: "Canada",
      code: "CA",
      states: [
        {
          id: 3,
          name: "Ontario",
          code: "ON"
        },
        {
          id: 4,
          name: "British Columbia",
          code: "BC"
        }
      ]
    }
  ];
}
