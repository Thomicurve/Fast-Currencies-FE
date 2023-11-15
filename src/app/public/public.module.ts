import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InputEditorComponent } from '../core/components/input-editor/input-editor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    InputEditorComponent,
    FormsModule
  ],
})
export class PublicModule { }
