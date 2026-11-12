import { Component, HostListener, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Section } from '../../types/section';

@Component({
  selector: 'app-aside',
  templateUrl: 'app-aside.component.html',
  styleUrl: 'app-aside.component.css',
  imports: [RouterLink],
})
export class AppAside {
  readonly sections = input<Section[]>([]);

  protected readonly activeSection = signal('');

  protected readonly visible = signal(false);

  constructor() {
    inject(Router)
      .events.pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => setTimeout(() => this.update()));
  }

  @HostListener('window:scroll')
  protected update(): void {
    const line = window.innerHeight * 0.4;

    const sections = this.sections();

    let current = sections[0]?.id ?? '';

    for (const section of sections) {
      const element = document.getElementById(section.id);

      if (element && element.getBoundingClientRect().top <= line) {
        current = section.id;
      }
    }

    this.activeSection.set(current);

    this.visible.set(current !== sections[0]?.id);
  }
}
