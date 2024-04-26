import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Base64EncodingService {
  constructor(public http: HttpClient) {
  }
  get(path: string): Observable<any> {
    return this.http.get<Observable<any>>(`${path}`);
  }
  post(path: string, data: any): Observable<any> {
    return this.http.post<Observable<any>>(`${path}`, data);
  }
  encode(data: string) {
    return this.http.post("http://localhost:8080/api/start", data, { observe: 'body', responseType: 'text' as 'json' });
  }
}
