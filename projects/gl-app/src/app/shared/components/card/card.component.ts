import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ICard } from './card.model';

@Component({
  selector: 'gl-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() model: ICard = {
    title: '',
    content: '',
    footer: ''
  };
  @Input() id: number = 0;
}
