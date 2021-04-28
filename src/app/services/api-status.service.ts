import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiStatus } from '../models/api-status';

@Injectable({
  providedIn: 'root'
})
export class ApiStatusService {
  baseURL = environment.apiURL + 'lastUpdate/';

  constructor( private http:HttpClient ) { }

  getLastUpdate (upDate: string): Observable<ApiStatus>  {

    const url =this.baseURL + upDate;
    return this.http.get<ApiStatus>(url);

  }

}
