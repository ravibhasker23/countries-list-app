import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountries } from '../model/countries.data';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiEndpoint = 'https://api.academy.incision.care/countries';

  constructor(private _http: HttpClient) {}

  fetchCountries(): Observable<ICountries[]> {
    return this._http.get<ICountries[]>(this.apiEndpoint);
  }
}
