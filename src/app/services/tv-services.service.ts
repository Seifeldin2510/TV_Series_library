import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvServicesService {
  apiKey:string = "77c08f1be688531589cf2a907a14653c";
  constructor(private http:HttpClient) { }

  getAllTV(pageNumber: number = 1): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&page=${pageNumber}`
    );
  }

  getTVById(TvId: number): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/tv/${TvId}?api_key=${this.apiKey}`
    );
  }
}
