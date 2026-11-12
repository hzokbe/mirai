import { Component } from '@angular/core';
import { MiraiHeading, MiraiText } from 'mirai';

@Component({
  imports: [MiraiHeading, MiraiText],
  selector: 'home-page',
  templateUrl: 'home.component.html',
})
export class HomePage {}
