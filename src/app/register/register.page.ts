import { User } from './../models/user';
import { AuthService } from './../services/auth.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const passwordControl = c.get('password');
  const confirmPasswordControl = c.get('confirmPassword');

  if (passwordControl.pristine || confirmPasswordControl.pristine) {
    return null;
  }

  if (passwordControl.value === confirmPasswordControl.value) {
    return null;
  }
  return { match: true };
}

function ageRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    const age = ageFromBirthDate(c.value);
    if (age !== undefined && age !== null && (age < min || age > max)) {
      return { range: true };
    }
    return null;
  };
}

function ageFromBirthDate(bd: string) {
  if (bd === undefined || bd === null) {
    return null;
  }
  const today = new Date();
  const birthDate = new Date(bd);
  let age = today.getFullYear() - birthDate.getFullYear();
  const mon = today.getMonth() - birthDate.getMonth();
  if (mon < 0 || (mon === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  user: User;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      passwordGroup: this.fb.group(
        {
          password: [
            '',
            Validators.compose([
              Validators.required,
              Validators.minLength(8),
              Validators.pattern(
                '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'
              )
            ])
          ],
          confirmPassword: ['', Validators.required]
        },
        { validator: passwordMatcher }
      ),
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ],
      gender: ['', Validators.required],
      birthDate: [
        '',
        Validators.compose([Validators.required, ageRange(15, 65)])
      ],
      country: ['', Validators.required],
      consent: ['', Validators.pattern('true')]
    });
  }

  register(registerForm: FormGroup) {
    if (registerForm.valid) {

      this.user = Object.assign({}, this.user, registerForm.value);
      this.user.roles = 'ADMIN';

      this.authService.register(this.user).subscribe(
        (data) => {
          console.log('register: ', data);
          if (data) {
            this.router.navigateByUrl('/app/dashboard');
          }
        },
        error => {
          console.error('Error ', error);
        }
      );
    }
  }
}
