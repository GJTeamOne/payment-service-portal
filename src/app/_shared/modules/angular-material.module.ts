import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

const AngularMaterial = [
  MatButtonModule ,
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatIconModule,
  MatDialogModule
];

@NgModule({
  imports: [...AngularMaterial],
  exports: AngularMaterial
})

export class AngularMaterialModule {}
