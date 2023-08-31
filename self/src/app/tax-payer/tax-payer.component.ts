import { Component, OnInit } from '@angular/core';
import { TaxPayer } from '../model/tax-payer.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CsvService } from '../service/csv-service';

@Component({
  selector: 'app-tax-payer',
  templateUrl: './tax-payer.component.html',
  styleUrls: ['./tax-payer.component.scss']
})
export class TaxPayerComponent implements OnInit {

  taxPayer: TaxPayer;

  name = new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]);
  firstName = new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]);
  phoneNumber = new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]);
  address = new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]);
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private _csvService: CsvService) {}

  public arrayWithSimpleData: Array<TaxPayer> = [
    new TaxPayer('Paco','Pil','Poligono','111','aa'),
  ];

  ngOnInit() {
    this.taxPayer = new TaxPayer('','','','','');
  }

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a value' :
        this.name.hasError('email') ? 'Not a valid name' :
            '';
  }

  getFirstNameErrorMessage() {
    return this.firstName.hasError('required') ? 'You must enter a value' :
        this.firstName.hasError('email') ? 'Not a valid firstName' :
            '';
  }

  getAddressErrorMessage() {
    return this.address.hasError('required') ? 'You must enter a value' :
        this.address.hasError('address') ? 'Not a valid address' :
            '';
  }

  getPhoneNumberErrorMessage() {
    return this.phoneNumber.hasError('required') ? 'You must enter a value' :
        this.phoneNumber.hasError('address') ? 'Not a valid phoneNumber' :
            '';
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  public saveDataInCSV(name: string, data: Array<any>): void {
    let csvContent = this._csvService.saveDataInCSV(data);

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);
    hiddenElement.target = '_blank';
    hiddenElement.download = name + '.csv';
    hiddenElement.click();
  }

  
}
