import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ITeam } from '../about.model';
import { AboutService } from '../about.service';

@Component({
  selector: 'gl-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent {
  public team$!: Observable<ITeam>;

  constructor(
    private aboutService: AboutService
  ) {
    this.team$ = this.aboutService.getTeam('developers');
  }
}
