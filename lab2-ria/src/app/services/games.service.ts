import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from '../model/juego';
import { map } from 'rxjs/operators';

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
