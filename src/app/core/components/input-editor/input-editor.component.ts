import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-editor',
  templateUrl: 'input-editor.component.html',
  styleUrls: ['./input-editor.component.scss'],
  imports: [FormsModule, CommonModule],
  standalone: true,
})

export class InputEditorComponent {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() isRequired: boolean = false;

  @Input() inputValue: string = "";
  @Output() inputValueChange = new EventEmitter<string>();

}