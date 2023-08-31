import { Component} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Manufacturer } from '../model/manufacturer.model';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { RepresentativeDialogComponent } from '../representative-dialog/representative-dialog.component';

@Component({
  selector: 'app-manufacturer-table',
  templateUrl: './manufacturer-table.component.html',
  styleUrls: ['./manufacturer-table.component.scss']
})
export class ManufacturerTableComponent {
  
  displayedColumns = ['id', 'firstname', 'lastname', 'pin', 'Action'];
  manufactures: Manufacturer[] = [
    {id: 1, firstname: 'User 1', lastname: 'demo', pin: '1234', email: '', gender: ''},
  ];
 
  fileNameDialogRef: MatDialogRef<RepresentativeDialogComponent>;
  dataSource = new MatTableDataSource(this.manufactures);

  constructor(public dialog: MatDialog) {
    
  }

  addRepresentative() {
    this.fileNameDialogRef = this.dialog.open(RepresentativeDialogComponent);
  }
}



