import { Directive, input } from '@angular/core';

@Directive({
  selector: '[miraiHeading]',
  host: {
    class: 'heading',
    '[class]': '`heading-${size()}`',
  },
})
export class MiraiHeading {
  size = input<'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>('6');
}
