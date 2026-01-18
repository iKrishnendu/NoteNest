import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Theme, ThemeService } from '../../../core/services/theme';
import { NotificationBell } from '../notification-bell/notification-bell';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, NotificationBell],
  templateUrl: './navbar.html',
})
export class Navbar {
  themes: Theme[] = ['indigo', 'purple', 'green', 'orange', 'dark'];

  constructor(private theme: ThemeService) {}

  changeTheme(t: Theme) {
    this.theme.setTheme(t);
  }
}