import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  // forms Validation
  formRegister = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
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
    city: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    state: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  });

  // State List
  stateList = [
    { label: 'Acre', value: 'ac' },
    { label: 'Alagoas', value: 'al' },
    { label: 'Amapá', value: 'ap' },
    { label: 'Amazonas', value: 'am' },
    { label: 'Bahia', value: 'ba' },
    { label: 'Ceará', value: 'ce' },
    { label: 'Distrito Federal', value: 'df' },
    { label: 'Espírito Santo', value: 'es' },
    { label: 'Goiás', value: 'go' },
    { label: 'Maranhão', value: 'ma' },
    { label: 'Mato Grosso', value: 'mt' },
    { label: 'Mato Grosso do Sul', value: 'ms' },
    { label: 'Minas Gerais', value: 'mg' },
    { label: 'Pará', value: 'pa' },
    { label: 'Paraíba', value: 'pb' },
    { label: 'Paraná', value: 'pr' },
    { label: 'Pernambuco', value: 'pe' },
    { label: 'Piauí', value: 'pi' },
    { label: 'Rio de Janeiro', value: 'rj' },
    { label: 'Rio Grande do Norte', value: 'rn' },
    { label: 'Rio Grande do Sul', value: 'rs' },
    { label: 'Rondônia', value: 'ro' },
    { label: 'Roraima', value: 'rr' },
    { label: 'Santa Catarina', value: 'sc' },
    { label: 'São Paulo', value: 'sp' },
    { label: 'Sergipe', value: 'se' },
    { label: 'Tocantins', value: 'to' }
  ];

  // Gender List
  gendersList = [
    { label: 'Masculino', value: 'masc' },
    { label: 'Feminino', value: 'fem' },
    { label: 'Não-Binário', value: 'other' },
  ]
}
