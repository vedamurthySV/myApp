import { User } from './../../sign-up/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

export interface SignupResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  user = new Subject<User>();

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  signup(email: string, password: string): Observable<any> {
    return this.http.post<SignupResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpVOnNxYKvQWHmnHjrnszHd15gVq1HDi0',
      {
        // tslint:disable-next-line:object-literal-shorthand
        email : email,
        // tslint:disable-next-line:object-literal-shorthand
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError),
     tap (resData => {
       this.handleAuthentication(
         resData.email,
         resData.localId,
         resData.idToken,
         +resData.expiresIn
       );
     })
    );
  }

  // tslint:disable-next-line:typedef
  login(email: string, password: string)  {
    // tslint:disable-next-line:max-line-length
    return this.http.post<SignupResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDpVOnNxYKvQWHmnHjrnszHd15gVq1HDi0',
      {
        // tslint:disable-next-line:object-literal-shorthand
        email: email,
        // tslint:disable-next-line:object-literal-shorthand
        password: password,
        returnSecureToken: true
      }
    )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  // tslint:disable-next-line:typedef
  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(
      new Date().getTime() + expiresIn * 1000
    );
    const user = new User(
      email,
      userId,
      token,
      expirationDate
    );
    this.user.next(user);
  }

  // tslint:disable-next-line:typedef
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {

      case 'EMAIL_EXISTS':
        errorMessage = ' this email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'this email does not exists';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = ' this password is not correct';
        break;
    }
    return throwError(errorMessage);

  }
}
