import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, OnChanges } from '@angular/core';
import { GridService } from './grid.service';

@Component({
  selector: 'gl-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit, OnChanges {
  @Input() entries: Array<any> = [];
  @Input() title: string = '';
  @Input() staticTitle: string = '';

  // private _entries: Array<any> = [];

  // @Input()
  // set entries(value: any) {
  //   console.log('value: ', value);

  //   this._entries = [...value];
  // }
  // get entries() {
  //   return this._entries;
  // }

  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor(
    private gridService: GridService
  ) {
    // gridService.update.subscribe(data => {
    //   console.log('update: ', data);

    //   if (data) {
    //     this._entries = [...data.entries];
    //   }
    // })
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: ', changes);
  }

  // getData(): void {
  //   this.update.emit();
  // }

}
