import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'gl-card-projection',
  templateUrl: './card-projection.component.html',
  styleUrls: ['./card-projection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardProjectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
