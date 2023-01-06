import { ThoughtType } from './thought';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) { }

  listar(): Observable<ThoughtType[]>{
    return this.http.get<ThoughtType[]>(this.API);
  }

  create(thought: ThoughtType): Observable<ThoughtType>{
    return this.http.post<ThoughtType>(this.API, thought);
  }

  edit(thought: ThoughtType): Observable<ThoughtType>{
    const url = `${this.API}/${thought.id}`;
    return this.http.put<ThoughtType>(url, thought);
  }

  delete(id: number): Observable<ThoughtType>{
    const url = `${this.API}/${id}`;
    return this.http.delete<ThoughtType>(url);
  }

  searchById(id: number): Observable<ThoughtType>{
    const url = `${this.API}/${id}`;
    return this.http.get<ThoughtType>(url);
  }
}
