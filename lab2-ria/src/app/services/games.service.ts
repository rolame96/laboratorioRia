import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  baseUrl = `${environment.url}`;
  constructor(private http: HttpClient) { }

  public getGames(){
    return this.http.get(this.baseUrl);
  }

  public getGameById(id: string){
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
