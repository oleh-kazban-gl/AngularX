import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { filter } from 'rxjs';

import { setCurrentRoute } from '../../../state+/root.actions';

@Component({
  selector: 'gl-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {

  constructor(
    private router: Router,
    private store: Store<any>
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(
      (event: any) => this.store.dispatch(setCurrentRoute({ data: { ...event, title: event.url } }))
    )
  }

  ngOnInit(): void { }
}
