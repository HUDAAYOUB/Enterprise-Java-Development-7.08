import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  private readonly API_URL = " https://ih-crud-api.herokuapp.com/characters";

  constructor(private http : HttpClient){}
  getAllCharachter(): Observable<any>{
    return this.http.get<any>(this.API_URL)
  }
}