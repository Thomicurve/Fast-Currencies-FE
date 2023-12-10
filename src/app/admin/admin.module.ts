import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MonedaListComponent } from './monedas/list/moneda-list.component';
import { MonedaEditComponent } from './monedas/edit/moneda-edit.component';
import { InputEditorComponent } from '../core/components/input-editor/input-editor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MonedaListComponent,
    MonedaEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    InputEditorComponent,
    FormsModule
  ]
})
export class AdminModule { }
