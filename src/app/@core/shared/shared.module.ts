import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../styles/material/material.module';
import { TableLoaderComponent } from './loaders/table-loader/table-loader.component';

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
];

const components = [TableLoaderComponent];

@NgModule({
  declarations: [components],
  imports: [modules],
  exports: [modules, components],
})
export class SharedModule {}
