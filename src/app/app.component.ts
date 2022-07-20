import { Component } from '@angular/core';

export type NullableString = string | null;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularX';
  titleNullable: NullableString = null;

  displayTitle = this.getTitle(this.titleNullable);

  public getTitle(titlePart: string): string {
    return `Title: ${titlePart}`
  }
}
