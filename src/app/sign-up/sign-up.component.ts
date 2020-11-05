import { Observable } from 'rxjs';
import { SignUpService, SignupResponseData } from './../commoncomponents/services/sign-up.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent implements OnInit {
  isLoginMode =  true;
  isLoading = false;
  error: string = null;
  constructor(private signUpService: SignUpService, private router: Router) { }


  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm) {
    if ( !form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let signObs: Observable<SignupResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      signObs = this.signUpService.login(email, password);
     }
    else {
      signObs = this.signUpService.signup(email, password);
         }

    signObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        // this.router.navigateByUrl('/Service'); (its note not a code - both are same)
        this.router.navigate(['/Service']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );


    form.reset();
  }
}
