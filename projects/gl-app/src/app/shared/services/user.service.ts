import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user = {
    firstName: 'Oleh',
    lastName: 'Kazban',
    uuid: '0f2620ba-fb99-417a-9ddb-f6e1d26a7bd5',
    department: {
      name: 'Engineering',
      location: {
        country: 'Ukraine',
        city: 'Kharkiv'
      }
    },
    roles: ['user', 'admin']
  };

  constructor() { }

  getCurrentUser() {
    return this._user;
  }

}
