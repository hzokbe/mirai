import { Directive, input } from '@angular/core';

@Directive({
  selector: '[miraiText]',
  host: {
    class: 'text',
    '[class]': '`text-${size()}`',
  },
})
export class MiraiText {
  size = input<'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>('3');
}
