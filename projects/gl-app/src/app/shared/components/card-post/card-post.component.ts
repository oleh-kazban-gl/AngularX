import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ICardPost } from './card-post.model';
import { CardComponent } from './../card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'gl-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DatePipe]
})
export class CardPostComponent extends CardComponent {
  @Input() override model: ICardPost = {
    title: '',
    content: '',
    footer: '',
    postedAt: '',
    updatedAt: '',
    requiredIdentity: []
  };

  get subTitle(): string {
    return `${this.model.subTitle ? this.model.subTitle + ' | ' + this.transformPostDate(this.model.postedAt) : this.transformPostDate(this.model.postedAt)}`;
  }

  constructor(
    private datePipe: DatePipe,
  ) {
    super();
  }

  private transformPostDate(date: string): string {
    return <string>this.datePipe.transform(date);
  }
}
