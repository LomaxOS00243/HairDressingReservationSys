import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Barbers } from './home-list/home-list.component';

import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class HairDSysDataService {

  constructor(private http: HttpClient) { }
  private apiBaseUrl = 'http://localhost:3000/api/';

  public getLocations(lat: number, lng: number): Promise<Barbers[]> {
    const maxDistance: number = 20;
    const url: string = `${this.apiBaseUrl}/locations?lng=${lng}&lat=${lat}&maxDistance=${maxDistance}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Barbers[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
