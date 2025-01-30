import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  loginForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]]
    })
  }

  login(){
    if(this.loginForm.valid){
      alert(`Email : ${this.loginForm.value.email}
        Password : ${this.loginForm.value.password}`)
    }else{
      alert(`Invalid Form`)
    }
  }

}
