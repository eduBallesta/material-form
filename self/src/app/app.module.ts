import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaxPayerComponent } from './tax-payer/tax-payer.component';
import { ValidatorComponent } from './validator/validator.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CsvService } from './service/csv-service';

@NgModule({
  declarations: [
    AppComponent,
    TaxPayerComponent,
    ValidatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
  ],
  providers: [
    CsvService,
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'black' },
    }
  ],
  bootstrap: [AppComponent, TaxPayerComponent]
})
export class AppModule { }
