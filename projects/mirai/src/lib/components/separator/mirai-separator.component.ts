import { Component, input } from '@angular/core';

@Component({
  selector: 'mirai-separator',
  template: '<div role="separator"></div>',
  host: {
    class: 'separator',
    '[class]': '`separator-${size()}`',
  },
})
export class MiraiSeparator {
  size = input<'1' | '2' | '3' | '4'>('1');
}
