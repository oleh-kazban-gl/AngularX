import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IDataType } from '@gl/components';
import { DataService } from '@gl/services';

@Component({
  selector: 'gl-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent {
  posts: Array<any> = [];
  gridTitle = 'Feed';

  constructor(
    private dataService: DataService
  ) { }

  onGridUpdate(options: IDataType): void {
    console.log('options: ', options);

    this.gridTitle = 'Updated Feed';
    this.getData(options);
  }

  private getData(options: IDataType): void {
    if (options && options.dataType) {
      this.posts = this.dataService.getDataByType(options.dataType);
    } else {
      this.posts = this.dataService.getData();
    }
  }

}
