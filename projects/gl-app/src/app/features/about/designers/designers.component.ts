import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ITeam } from '../about.model';
import { AboutService } from '../about.service';

@Component({
  selector: 'gl-designers',
  templateUrl: './designers.component.html',
  styleUrls: ['./designers.component.scss']
})
export class DesignersComponent {
  public team$!: Observable<ITeam>;

  constructor(
    private aboutService: AboutService
  ) {
    this.team$ = this.aboutService.getTeam('designers');
  }

}
