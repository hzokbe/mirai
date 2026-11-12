import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './components/header/app-header.component';
import { Section } from './types/section';
import { AppAside } from './components/aside/app-aside.component';

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
  ];
}
