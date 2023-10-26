import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpParamsService {

  constructor() { }

  buildHttpParams(params: any): HttpParams {
    let httpParams = new HttpParams();
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return httpParams;
  }
}