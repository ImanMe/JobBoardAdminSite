export interface Job {
    id: number;
    salary: number;
    title: string;
    employmentTypeId: number;
    categoryId: number;
    jobDescription: string;
    jobRequirements: string;
    salaryTypeId: number;
    countryId: number;
    stateId: number;
    city: string;
    zipCode: string;
    address: string;
    minimumExperience: number;
    maximumExperience: number;
    selectedOccupation: number[];
    companyName: string;
    jobBoardId: number;
    emailTo: string;
    activationDate: string;
    expirationDate: string;
    schedulingPod: number;
    officeId: number;
    division: string;
    author: string;
    apscl: number;
    bob: number;
    intvs: number;
    intvs2: number;
    isBestPerforming: boolean;
    isEverGreen: boolean;
    stat: Stat;
}

export interface Stat {
    apsCl: number;
    intvs: number;
    intvs2: number;
    bob: number;
}