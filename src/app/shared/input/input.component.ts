import { Component, OnInit, Input } from '@angular/core';
import { FormControl, AbstractControl, Form } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() label: string = '';
  @Input() control!: FormControl;

  constructor() {}
  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }

  ngOnInit(): void {}
}
