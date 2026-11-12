import { Directive, input } from '@angular/core';

@Directive({
  selector: 'button[miraiButton]',
  host: {
    class: 'button',
    '[class]':
      'variant() === "solid" ? `button-${size()}` : `button-${size()} button-outline`',
  },
})
export class MiraiButton {
  size = input<'1' | '2' | '3' | '4'>('2');

  variant = input<'solid' | 'outline'>('solid');
}
