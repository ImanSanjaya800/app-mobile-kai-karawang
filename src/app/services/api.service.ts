import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http : HttpClient
  ) { }

  public UserLogin(data : any){
    return this.http.post<any>(environment.urlapi + 'login', 
    {
      'username': data.username, 
      'password': data.password
    }, 
    { 
      responseType: 'json'
    });
  }

}
