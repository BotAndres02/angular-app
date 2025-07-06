import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-example-form',
  standalone: false,
  templateUrl: './example-form.component.html',
  styleUrl: './example-form.component.css'
})
export class ExampleFormComponent {
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
    }
  }
}
