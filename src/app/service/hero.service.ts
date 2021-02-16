import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 
  apiUrl: string = 'http://localhost:3000/product'; 

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.apiUrl);
  }
}
