import { Inject } from '@angular/core';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { APP_ENDPOINTS } from '@gl/shared';

export interface IDataType {
  dataType: DataTypeEnum;
}
export enum DataTypeEnum {
  CurrentUser = 'currentUser'
}

@Component({
  selector: 'gl-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
  @Input() entries: Array<any> = [];
  @Input() title: string = '';
  @Input() staticTitle: string = '';

  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor(
    @Inject(APP_ENDPOINTS) appEndpoints: any
  ) {
    console.log('value from injection token: ', appEndpoints);
  }

  get style() {
    return {
      'font-style': 'italic',
      'font-weight': 'bold',
      'font-size': '24px'
    }
  }

  getData(): void {
    this.update.emit();
  }

  getCurrentUserData(): void {
    this.update.emit({
      dataType: 'currentUser'
    });
  }

}
