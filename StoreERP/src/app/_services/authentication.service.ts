import { Injectable, SkipSelf } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
//import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from "rxjs/operators";

//import { User } from "../_models/user";
//import { UserModel } from "../_models/common/UserModel";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  /* private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>; */

  constructor(
    private router: Router,
    private http: HttpClient,
    //public jwtHelper: JwtHelperService
  ) {
    /* this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable(); */
    // console.log(this.currentUserSubject.value);
  }

  public isAuthenticated(): boolean {
    //var token_Model: User = JSON.parse(localStorage.getItem("currentUser"));
    // Check whether the token is expired and return
    // true or false

 /*    if (token_Model != null) {
      return true;//!this.jwtHelper.isTokenExpired(token_Model.token);
    } else {
      return false;
    } */
    return true;
  }
/*   public get currentUserValue(): User {
    return this.currentUserSubject.value;
  } */
  //login(userModel: UserModel): Observable<HttpResponse<User>> {
  /* login(userModel: UserModel): Observable<any>  {
    return this.http
      .post<any>(environment.url + `login/login`, userModel)
      // .pipe(
      //   map((user) => {
      //     localStorage.setItem("currentUser", JSON.stringify(user));
      //     this.currentUserSubject.next(user);
      //     return user;
      //   })
      // );
  } */
  logout() {
    // remove user from local storage to log user out
    sessionStorage.clear();
    localStorage.removeItem("currentUser");
   // this.currentUserSubject.next(null);
    this.router.navigate(["/login"]);
  }
}
