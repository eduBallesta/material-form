import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaxPayer } from '../model/tax-payer.model';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {
  
  showForm: boolean = false;
  public companyFormGroup: FormGroup;

  constructor() {}

  title = 'self';
  taxPayer: TaxPayer;
  checked: boolean[] = [false, false, false, false, false, false, false, false, false, false];
  taxStations: string = '';

  enableConfirmButton(): boolean {
    return true;
  }

  showTaxPayer(): void {
    this.showForm = true;
  }

  ngOnInit() {
    this.taxPayer = new TaxPayer('','','','','','','','','',[]);
    
    this.companyFormGroup = new FormGroup({
      pin : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
      userType : new FormControl('1'),
      companyName: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      phoneNumber: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      postalCode: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      city: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      physicalAddress: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      taxStation: new FormControl('', [Validators.required])
    });

    this.companyFormGroup.get('pin').valueChanges.subscribe(value => {
      this.taxPayer.pin = value;
    });

    this.companyFormGroup.get('userType').valueChanges.subscribe(value => {
      this.taxPayer.usertType = value;
    });

    this.companyFormGroup.get('companyName').valueChanges.subscribe(value => {
      this.taxPayer.companyName = value;
    });

    this.companyFormGroup.get('phoneNumber').valueChanges.subscribe(value => {
      this.taxPayer.phoneNumber = value;
    });

    this.companyFormGroup.get('postalCode').valueChanges.subscribe(value => {
      this.taxPayer.postalCode = value;
    });

    this.companyFormGroup.get('city').valueChanges.subscribe(value => {
      this.taxPayer.city = value;
    });

    this.companyFormGroup.get('physicalAddress').valueChanges.subscribe(value => {
      this.taxPayer.physicalAddress = value;
    });

    this.companyFormGroup.get('email').valueChanges.subscribe(value => {
      this.taxPayer.email = value;
    });

    this.companyFormGroup.get('taxStation').valueChanges.subscribe(value => {
      this.taxPayer.taxStation = value;
    });

  }

  public checkError = (controlName: string, errorName: string) => {
    return this.companyFormGroup.controls[controlName].hasError(errorName);
  }


  public onSubmit(): void {
    console.log('On Submit')
  }




}

