import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  
  }

  title = 'self';
  favoriteSeason: string;
  seasons: string[] = ['Manufacturer', 'Tax Payer', 'Both'];
  value = '';
}

