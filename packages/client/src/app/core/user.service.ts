import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const api = environment.apiURL;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${api}/users`, httpOptions);
  }

  public getUserByID(id: string): Observable<User> {
    return this._http.get<User>(`${api}/users/${id}`, httpOptions);
  }

  public addUser(username: string) {
    return this._http.post(`${api}/users`, username, httpOptions);
  }
}
