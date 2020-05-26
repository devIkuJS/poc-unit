import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from '~/app/utils/url-api';
import { User } from '~/app/models/user';
import { retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(data : User) {

    return this.http.post<User[]>(`${URL_API}login`, data,  { headers: this.commonHeader() } ).pipe(retry(1));
  }
  
  private commonHeader(){
    return new HttpHeaders({
      'Content-Type':'application/json'
     });
   }

}
