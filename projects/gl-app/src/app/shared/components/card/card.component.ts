import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

export interface ICardPost {
  title: string,
  subTitle: string,
  content: string,
  footer: string,
  postedAt: string,
  updatedAt: string,
  requiredIdentity: Array<string>,
  avatar: string;
  preview: string;
};

@Component({
  selector: 'gl-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DatePipe]
})
export class CardPostComponent {
  @Input()
  model!: ICardPost;
  @Input()
  loading$!: Observable<boolean>;

  get subTitle(): string {
    return `${this.model.subTitle ? this.model.subTitle + ' | ' + this.transformPostDate(this.model.postedAt) : this.transformPostDate(this.model.postedAt)}`;
  }

  constructor(
    private datePipe: DatePipe,
  ) { }

  private transformPostDate(date: string): string {
    return <string>this.datePipe.transform(date);
  }
}
