import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private baseURL = "https://rickandmortyapi.com";
  private apiUrl = `${this.baseURL}/api/character`;

  constructor(private http: HttpClient) {}

   getCharacters(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
   }
}
