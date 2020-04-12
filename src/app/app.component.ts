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
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  // onSubmit(form: NgForm): void {
  //   console.log(form);
  // }

  // onSubmit(): void {
  //   console.log(this.signUpForm);
  // }

  onSubmit(): void {
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.secretAnswer;
    this.user.gender = this.signUpForm.value.gender;
  }

  suggestUsername(): void {
    const suggestedName = 'Superuser';

    // First method but not ideal as we need to specify all the controls
    // and we may override already entered values
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: this.defaultQuestion,
    //   secretAnswer: '',
    //   gender: this.defaultGender
    // });

    // This method is the best as we can specify only the value of the control targeted
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }
}
