import { Component, input } from '@angular/core';

@Component({
  selector: 'mirai-badge',
  template: '<ng-content />',
  host: {
    class: 'badge',
    '[class]':
      'variant() === "solid" ? `badge-${size()}` : `badge-${size()} badge-outline`',
  },
})
export class MiraiBadge {
  size = input<'1' | '2' | '3'>('1');

  variant = input<'solid' | 'outline'>('solid');
}
