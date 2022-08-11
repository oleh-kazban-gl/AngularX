import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { tap } from 'rxjs/operators';

import { ICardPost } from './card-post.model';
import { CardComponent } from './../card/card.component';
import { DatePipe } from '@angular/common';
import { CardService } from './card.service';
import { filter } from 'rxjs/operators';

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
    updatedAt: ''
  };

  get subTitle(): string {
    return `${this.model.subTitle ? this.model.subTitle + ' | ' + this.transformPostDate(this.model.postedAt) : this.transformPostDate(this.model.postedAt)}`;
  }

  constructor(
    private datePipe: DatePipe,
    private cardService: CardService
  ) {
    super();

    this.cardService.click.pipe(
      tap(data => {
        console.log('tap: data: ', data);
      }),
      filter(data => data.id !== this.id)
    ).subscribe(data => {
      console.log(`Card id: ${this.id} data: `, data);
    })
  }

  private transformPostDate(date: string): string {
    return <string>this.datePipe.transform(date);
  }

  onClick(event: any) {
    this.cardService.emitOnClick({ event, id: this.id })
  }
}
