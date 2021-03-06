import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
  } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { map, catchError } from 'rxjs/operators';
  import { Injectable } from '@angular/core';
  //import { LoadingController } from '@ionic/angular';
 // import { AuthenticationService } from "../_services";

  @Injectable()
  export class HttpConfigInterceptor implements HttpInterceptor {
    loaderToShow: any;
    constructor(
     // public loadingController: LoadingController,
     // private authenticationService: AuthenticationService,
      ) { }
  
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
      const token = "my-token-string-from-server";
  
      //Authentication by setting header with token value
    //   if (this.authenticationService.token) {
    //     request = request.clone({
    //         setHeaders: {
    //             Authorization: `Bearer ${this.authenticationService.token}`,
    //           },
    //           withCredentials: true,
    //     });
    //   }
  
      if (!request.headers.has('Content-Type')) {
        request = request.clone({
          setHeaders: {
            'content-type': 'application/json'
          }
        });
      }
  
      request = request.clone({
        headers: request.headers.set('Accept', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept').set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')      
        
      });
     // this.showLoader();
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
          }
          //this.hideLoader();
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          //this.hideLoader();
          return throwError(error);
        }));
    }
  
    // showLoader() {
    //   this.loaderToShow = this.loadingController.create({
    //     message: 'Processing Server Request'
    //   }).then((res) => {
    //     res.present();
  
    //     res.onDidDismiss().then((dis) => {
    //       console.log('Loading dismissed!');
    //     });
    //   });
    //   this.hideLoader();
    // }
  
    // hideLoader() {
    //     this.loadingController.dismiss();
    // }
  
  
  }