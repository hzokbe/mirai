import { Component } from '@angular/core';
import { MiraiHeading } from 'mirai';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MiraiHeading, RouterLink],
  selector: 'app-header',
  templateUrl: 'app-header.component.html',
  styleUrl: 'app-header.component.css',
})
export class AppHeader {}
