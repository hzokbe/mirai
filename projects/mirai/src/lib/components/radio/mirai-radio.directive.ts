import { Directive, input } from '@angular/core';

@Directive({
  selector: 'input[type="radio"][miraiRadio]',
  host: {
    class: 'radio',
    '[class]': '`radio-${size()}`',
  },
})
export class MiraiRadio {
  size = input<'1' | '2' | '3'>('2');
}
