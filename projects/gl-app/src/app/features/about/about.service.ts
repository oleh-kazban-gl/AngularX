import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_ENDPOINTS } from '@gl/shared';
import { Observable } from 'rxjs';
import { ITeam } from './about.model';

@Injectable()
export class AboutService {
  constructor(
    @Inject(APP_ENDPOINTS) private appEndpoints: any,
    private http: HttpClient,
  ) { }

  getTeam(type: string): Observable<ITeam> {
    return this.http.get<ITeam>(`${this.appEndpoints.api}/${type}`);
  }
}
