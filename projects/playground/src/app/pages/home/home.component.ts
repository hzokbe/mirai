import { Component } from '@angular/core';
import { MiraiButton, MiraiHeading, MiraiText } from 'mirai';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { radixArrowRight } from '@ng-icons/radix-icons';

@Component({
  imports: [MiraiHeading, MiraiText, MiraiButton, RouterLink, NgIcon],
  selector: 'home-page',
  templateUrl: 'home.component.html',
  viewProviders: [provideIcons({ radixArrowRight })],
})
export class HomePage {
  openRepository(): void {
    window.open('https://www.github.com/hzokbe/mirai', '_blank', 'noopener');
  }
}
