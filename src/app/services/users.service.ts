import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API, headers } from '../utils/url-api';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  constructor(private http: HttpClient) { }

   getUsers(): Observable<User[]>{
      return this.http.get<User[]>(`${URL_API}/users`).pipe(tap(users => users["data"]));
    }

    createUser (user): Observable<User> {
      return this.http.post<User>(`${URL_API}/users`, user, {headers: headers}).pipe(
        tap((user: User) => console.log(`Usuario agregado , id=${user.id}`))
        ); 
    }


   deleteUser (id : number): Observable<User> {
    return this.http.delete<User>(`${URL_API}/users/${id}`, {headers: headers}).pipe(
      tap( () => console.log(`Usuario eliminado id=${id}`))
    );
  }





}
