import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ITeam } from '../about.model';
import { AboutService } from '../about.service';

@Component({
  selector: 'gl-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
  public team$!: Observable<ITeam>;

  constructor(
    private aboutService: AboutService
  ) {
    this.team$ = this.aboutService.getTeam('management');
  }
}
