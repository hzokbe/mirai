import { Directive, input } from '@angular/core';

@Directive({
  selector: 'input[type="checkbox"][miraiCheckbox]',
  host: {
    class: 'checkbox',
    '[class]': '`checkbox-${size()}`',
  },
})
export class MiraiCheckbox {
  size = input<'1' | '2' | '3'>('2');
}
