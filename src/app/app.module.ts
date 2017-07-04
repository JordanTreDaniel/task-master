import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TaskShellComponent } from './task-shell/task-shell.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskFormComponent } from './task-form/task-form.component';

import { MaterialComponentsModule } from '../helper-modules/material-components.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    TaskShellComponent,
    TaskDetailComponent,
    TaskFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
