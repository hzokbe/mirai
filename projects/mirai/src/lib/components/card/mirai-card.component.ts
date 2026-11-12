import { Component, input } from '@angular/core';

@Component({
  selector: 'mirai-card',
  template: '<ng-content />',
  host: {
    class: 'card',
    '[class]': '`card-${size()}`',
  },
})
export class MiraiCard {
  size = input<'1' | '2' | '3' | '4' | '5'>('1');
}
