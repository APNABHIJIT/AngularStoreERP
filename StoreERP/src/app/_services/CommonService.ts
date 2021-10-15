import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class CommonService {
  //private actionUrl: string;
  

  //converter = require("number-to-words");
  constructor(private http: HttpClient) {
    // this.actionUrl = environment.url + 'API/';
  }
  public get(url): Observable<any> {
    return this.http.get(environment.url + url);
  }

  public post(url, obj: Object): Observable<any> {
    return this.http.post(environment.url + url, obj);
  }
  public getAll<T>(actionUrl: string): Observable<any> {
    return this.http.get<any>(environment.url + actionUrl);
  }
  public getAllWithParam(url, obj: Object): Observable<any> {
    return this.http.get(environment.url + url, obj);
  }
  public getSingleString<T>(actionUrl: string, param: any): Observable<any> {
    const headers = new HttpHeaders().set(
      "Content-Type",
      "text/plain; charset=utf-8"
    );

    return this.http.post<any>(environment.url + actionUrl, param, {
      headers,
      responseType: "text" as "json",
    });
  }

  public getSingle<T>(id: number, actionUrl: string): Observable<any> {
    return this.http.get<any>(environment.url + actionUrl + id);
  }
  public getSelected<T>(ParamData: any, actionUrl: string): Observable<any> {
    return this.http.post<any[]>(environment.url + actionUrl, ParamData);
  }
  // public postOrder(url: string, obj: Object): Observable<any> {
  //   const headers = new HttpHeaders()
  //     .set("Access-Control-Allow-Origin", "*")
  //     .set("Access-Control-Allow-Credentials", "true")
  //     .set(
  //       "Access-Control-Allow-Headers",
  //       "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  //     )
  //     .set("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
  //   return this.http.post(environment.spotliteUrl + url, obj, {
  //     headers,
  //     responseType: "text" as "json",
  //   });
  // }

  public getSelectedWithString<T>(
    ParamData: string,
    actionUrl: string
  ): Observable<any> {
    return this.http.post<any[]>(environment.url + actionUrl, ParamData);
  }

  public add<T>(itemName: string, actionUrl: string): Observable<T> {
    const toAdd = { ItemName: itemName };

    return this.http.post<any>(environment.url + actionUrl, toAdd);
  }

  public update<T>(
    id: number,
    itemToUpdate: any,
    actionUrl: string
  ): Observable<T> {
    return this.http.put<any>(environment.url + actionUrl + id, itemToUpdate);
  }

  public delete<T>(id: number, actionUrl: string): Observable<T> {
    return this.http.delete<any>(environment.url + actionUrl + id);
  }
  public getSingleWithString<T>(
    id: string,
    actionUrl: string
  ): Observable<any> {
    let params = new HttpParams();
    params = params.append("var1", id);
    return this.http.get<any>(environment.url + actionUrl, { params: params });
  }
  public getFromMultipleParam<T>(
    obj: Object,
    actionUrl: string
  ): Observable<any> {
    return this.http.post<any>(environment.url + actionUrl, obj);
  }
  downloadFile(actionUrl: string, obj: Object): Observable<any> {
    return this.http.post(environment.url + actionUrl, obj, {
      responseType: "arraybuffer",
    });
  }
  getStateList(list: any[]) {
    let stateList = [];
    list.filter((a) => {
      if (
        a.stateCode != undefined &&
        a.stateCode != null &&
        a.stateCode != ""
      ) {
        stateList.push(a.stateCode);
      }
    });
    return stateList;
  }
  getDistrictList(list: any[], selected) {
    let districtList = [];
    list.filter((a) => {
      if (
        a.districtCode != undefined &&
        a.districtCode != null &&
        a.districtCode != "" &&
        a.stateCode == selected
      ) {
        districtList.push(a.districtCode);
      }
    });
    return districtList;
  }
  getRegDistrictList(list: any[], selected) {
    let regDistrictList = [];
    list.filter((a) => {
      if (
        a.regDistrict != undefined &&
        a.regDistrict != null &&
        a.regDistrict != "" &&
        a.districtCode == selected
      ) {
        regDistrictList.push(a.regDistrict);
      }
    });
    return regDistrictList;
  }
  getAreaList(list: any[], selected) {
    // return list.filter(a => a.areaCode != undefined && a.areaCode != null);
    let areaList = [];
    list.filter((a) => {
      if (
        a.areaCode != undefined &&
        a.areaCode != null &&
        a.areaCode != "" &&
        a.regDistrict == selected
      ) {
        areaList.push(a.areaCode);
      }
    });
    return areaList;
  }
  getUrlToRedirect(url: string, newUrl: string) {
    var splitted = url.split("/");
    var redirectUrl = window.location.origin + "#/" + splitted[1] + newUrl;
    console.log("redirectUrl");
    console.log(redirectUrl);
    window.open(redirectUrl, "_blank");
    //window.open(this.SURVEY_URL, "_blank");
  }
  // decimalToWords(value: number) {
  //   var stringValue = value.toString();
  //   if (stringValue.includes(".")) {
  //     var words = this.transform(this.converter.toWords(value)).concat(" point ");
  //     var splitted = stringValue.split(".");
  //     var strIntoObj = splitted[1].split("");
  //     for (var i = 0; i < strIntoObj.length; i++) {
  //       var finalValue = this.transform(this.converter.toWords(strIntoObj[i]));
  //       words = words.toString().concat(" ").concat(finalValue.toString());
  //     }
  //     return words;
  //   } else {
  //     return this.transform(this.converter.toWords(value));
  //   }
  // }


  public transform(input:string): string{
    console.log(input);
    if (!input) {
        return '';
    } else {
        return input.replace(/\b\w/g, first => first.toLocaleUpperCase()) 
    }
}

}
