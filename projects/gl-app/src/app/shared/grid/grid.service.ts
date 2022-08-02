import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  update: EventEmitter<any> = new EventEmitter();

  updateEntries(entries: Array<any>): void {
    this.update.emit({ entries });
  }
}
