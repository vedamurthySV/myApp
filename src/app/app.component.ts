import { SignUpService } from './commoncomponents/services/sign-up.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  title = 'multiviewheader';
  constructor(
    private signUpService: SignUpService
  ) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
     this.userSub = this.signUpService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
     });
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
