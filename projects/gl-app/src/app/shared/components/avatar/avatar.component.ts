import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gl-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() model: any;

  constructor() { }

}
