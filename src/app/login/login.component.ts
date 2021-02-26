import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['']
      });
  }

  // tslint:disable-next-line:typedef
  get fval() { return this.loginForm.controls; }

  // tslint:disable-next-line:typedef
  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
    return;
    }

    this.loading = true;
    this.authenticationService.login(this.fval.username.value)
    .subscribe(
    data => {
    this.router.navigate(['/']);
    },
    error => {
    this.loading = false;
    });
  }

}
