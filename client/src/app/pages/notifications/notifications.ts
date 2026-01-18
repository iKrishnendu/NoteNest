import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notification, NotificationService } from '../../core/services/notification';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.html',
})
export class Notifications implements OnInit {
  notifications: Notification[] = [];

  constructor(private notify: NotificationService) {}

  ngOnInit(): void {
    this.notifications = this.notify.getAll();
  }

  markRead(id: string): void {
    this.notify.markAsRead(id);
  }
}
