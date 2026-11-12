import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[miraiLink]',
  host: {
    class: 'link',
    '[class]': '`link-${size()}`',
  },
})
export class MiraiLink {
  size = input<'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>('3');
}
