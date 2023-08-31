import { Component } from '@angular/core';
import { CsvService } from './service/csv-service';
import { TaxPayer } from './model/tax-payer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title: string;
  public arrayWithSimpleData: Array<TaxPayer> = [
    new TaxPayer('AIIOIOII','Wine','GE','058585','22','111','aa','2222','22222',[]),
  ];

  constructor(private _csvService: CsvService) {}

  public saveDataInCSV(name: string, data: Array<any>): void {
    let csvContent = this._csvService.saveDataInCSV(data);

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);
    hiddenElement.target = '_blank';
    hiddenElement.download = name + '.csv';
    hiddenElement.click();
  }

}
