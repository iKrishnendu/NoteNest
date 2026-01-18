import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';
import { Home } from './pages/home/home';
import { CreateNote } from './pages/create-note/create-note';
import { ViewNote } from './pages/view-note/view-note';
import { Notifications } from './pages/notifications/notifications';
import { NoteHistory } from './pages/note-history/note-history';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: Home },
      { path: 'create', component: CreateNote },
      { path: 'note/:id', component: ViewNote },
      { path: 'notifications', component: Notifications },
      { path: 'note/:id/history', component: NoteHistory,
}
    ],
  },
];
