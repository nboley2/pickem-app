import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchupsService {

  constructor(private http: HttpClient) { }

  getMatchups(year, week) {
    return this.http.get(`https://cwlabs.io/api/pickem/matchups/${year}/${week}`);
  }
}
