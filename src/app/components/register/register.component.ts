import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { User } from '../../Models/User';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  // forms Validation
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(12),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    complement: new FormControl('', [Validators.maxLength(100)]),
    city: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    state: new FormControl('', [Validators.required])
  });

  // User Vetor
  userVetor: User[] = [];

  // Register Function
  register() {
    this.userVetor.push(this.registerForm.value as User);
    this.registerForm.reset();
  }

  //State List
  stateList: string[] = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "PR",
    "SC",
    "SP",
    "SE",
    "TO"
  ]
}
