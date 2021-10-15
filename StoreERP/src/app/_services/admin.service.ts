import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { UserModel } from "../_models/common/UserModel"; 
import { Router } from '@angular/router';  
import { environment } from "../../environments/environment";

import { JwtHelperService } from '@auth0/angular-jwt';  
  
@Injectable({  
  providedIn: 'root'  
})  
export class AdminService {  
  
   
  
    
  
  constructor(private http: HttpClient, private router : Router) { }  
  
   
  
  login(adminDetail : UserModel) : Observable<any>  
  {  
      let url = environment.url + "login/login";  
      return this.http.post(url, UserModel);  
  }  
  
  logout()   
  {   
    // Remove the token from the localStorage.  
    localStorage.removeItem('token');  
    localStorage.removeItem("id"); 
    localStorage.removeItem("session");
    this.router.navigate(['/login']);  
  
  }  
  
  /* 
  * Check whether User is loggedIn or not. 
  */  
  
  isLoggedIn() {   
  
    // create an instance of JwtHelper class.  
    let jwtHelper = new JwtHelperService();  
  
    // get the token from the localStorage as we have to work on this token.  
    let token = localStorage.getItem('token');  
  
    // check whether if token have something or it is null.  
    if(!token)  
    {  
      return false;  
    }  
  
    // get the Expiration date of the token by calling getTokenExpirationDate(String) method of JwtHelper class. this method accepts a string value which is nothing but a token.  
  
    if(token)  
    {  
      //let expirationDate = jwtHelper.getTokenExpirationDate(token);  
  
      // check whether the token is expired or not by calling isTokenExpired() method of JwtHelper class.  
  
      //let isExpired = jwtHelper.isTokenExpired(token);  
  
      //return !isExpired; 
      return true;           
    }     
  }  
    
    
   
    
}  