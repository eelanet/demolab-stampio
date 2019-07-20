import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Company } from '../classes/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl = 'https://stampio.herokuapp.com';
  // private apiUrl = 'https://sheltered-meadow-90414.herokuapp.com';

  constructor(private http: HttpClient) { }

  // Virheenkäsittelymetodi joka palauttaa observablen
  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return (error.message || error);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl + '/company/findall').pipe(
      catchError(this.handleError)
    );
  }

  getCompany(ytunnus: string): Observable<Company> {
    return this.http.get<Company>(this.apiUrl + '/company/findone/' + ytunnus).pipe(
      catchError(this.handleError)
    );
  }
}
