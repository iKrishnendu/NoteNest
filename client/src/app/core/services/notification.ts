import { Injectable } from '@angular/core';

export interface Notification {
  id: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  notifications: Notification[] = [
    {
      id: '1',
      message: 'Someone requested deletion of your note',
      read: false,
      createdAt: new Date(),
    },
  ];

  getAll() {
    return this.notifications;
  }

  unreadCount() {
    return this.notifications.filter(n => !n.read).length;
  }

  markAsRead(id: string) {
    const n = this.notifications.find(x => x.id === id);
    if (n) n.read = true;
  }
}
