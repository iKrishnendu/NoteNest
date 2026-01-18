import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationService } from '../../../core/services/notification';

@Component({
  selector: 'app-notification-bell',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './notification-bell.html',
})
export class NotificationBell {
  constructor(public notify: NotificationService) {}
}
