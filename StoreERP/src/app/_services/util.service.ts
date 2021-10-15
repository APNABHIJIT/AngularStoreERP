import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }
  encrypt(password: String) {
    const hash = CryptoJS.SHA1(password);
    return hash.toString(CryptoJS.enc.Base64).replace('=', ''.trim());
  }
}
