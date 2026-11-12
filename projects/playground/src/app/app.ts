import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './components/header/app-header.component';
import { AppAside } from './components/aside/app-aside.component';
import { Section } from './types/section';

@Component({
  imports: [RouterOutlet, AppHeader, AppAside],
  selector: 'app-root',
  templateUrl: 'app.html',
})
export class App {
  protected readonly sections: Section[] = [
    { id: 'about', label: 'Mirai' },
    { id: 'headings', label: 'Headings' },
    { id: 'texts', label: 'Texts' },
    { id: 'buttons', label: 'Buttons' },
    { id: 'links', label: 'Links' },
    { id: 'cards', label: 'Cards' },
  ];
}
