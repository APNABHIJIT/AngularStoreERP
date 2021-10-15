import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
editLandParcel:any;
  constructor() { }
  
  get(){
   return this.editLandParcel;
  }
  set(data:any){
    this.editLandParcel = data;
  }
  clear(){
    this.editLandParcel = undefined;
  }
}
9