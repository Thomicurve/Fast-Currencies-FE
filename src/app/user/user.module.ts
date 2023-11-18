import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ConvertirComponent } from './convertir/convertir.component';
import { PlanesComponent } from './planes/planes.component';
import { HistorialComponent } from './historial/historial.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { InputEditorComponent } from '../core/components/input-editor/input-editor.component';


@NgModule({
  declarations: [
    ConvertirComponent,
    PlanesComponent,
    HistorialComponent,
    MiPerfilComponent,
    PlanesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    InputEditorComponent
  ]
})
export class UserModule { }
