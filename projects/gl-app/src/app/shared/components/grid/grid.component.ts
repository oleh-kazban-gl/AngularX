import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

export interface IGridOptions {
  sorting: GridSortEnum
}

export enum GridSortEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

@Component({
  selector: 'gl-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
  @Input() entries$!: Observable<Array<any>>;
  @Input() title: string = '';
  @Input() staticTitle: string = '';
  @Input()
  set options(value: IGridOptions) {
    this._options = value;
    this.emitChanges();
  }
  get options() {
    return this._options;
  }

  @Output() optionsChange: EventEmitter<IGridOptions> = new EventEmitter();

  sorting = GridSortEnum;

  private _options!: IGridOptions;

  constructor(
    private router: Router
  ) {
    this.options = {
      sorting: GridSortEnum.ASC
    }
  }

  private emitChanges(): void {
    this.optionsChange.emit(this.options);
  }

  public sort(direction: GridSortEnum): void {
    this.options = { ...this.options, sorting: direction };
  }

  public navigate(id: string): void {
    this.router.navigateByUrl(`/posts/${id}`);
  }

}
