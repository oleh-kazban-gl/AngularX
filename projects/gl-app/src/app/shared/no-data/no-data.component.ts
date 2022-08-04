import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'gl-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoDataComponent {
  @Input() noDataText = 'No Data';
}
