import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form', {static: false}) signUpForm: NgForm;
  readonly defaultQuestion = 'pet';
  readonly defaultGender = 'male';
  answer = '';
  genders = ['male', 'female', 'other'];

  // onSubmit(form: NgForm): void {
  //   console.log(form);
  // }

  onSubmit(): void {
    console.log(this.signUpForm);
  }
}
