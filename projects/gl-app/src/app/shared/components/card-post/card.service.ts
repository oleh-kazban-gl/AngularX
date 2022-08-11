import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CardService {
  constructor() {
    console.info('CardService created');
  }

  click: Subject<any> = new Subject();

  emitOnClick(event: any): void {
    this.click.next(event);
  }
}
