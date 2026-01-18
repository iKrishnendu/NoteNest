import { Injectable } from '@angular/core';

export type Theme =
  | 'indigo'
  | 'purple'
  | 'green'
  | 'orange'
  | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly key = 'notenest-theme';

  setTheme(theme: Theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.key, theme);
  }

  initTheme() {
    const saved = localStorage.getItem(this.key) as Theme | null;
    this.setTheme(saved ?? 'indigo');
  }
}
