import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

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

  getData(): void {
    this.update.emit();
  }

}
