import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
             selector: 'app-login-page',
             templateUrl: './login-page.component.html',
             styleUrls: ['./login-page.component.scss']
           })
export class LoginPageComponent implements OnInit {
  public userForm: FormGroup = this.fb.group({
    userLogin: ['', Validators.required],
    userPassword: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  public ngOnInit(): void {
  }

  public login(): void {
    this.authService.Login(this.userForm.value.userLogin);
    this.router.navigate(['/results']);
  }
}
