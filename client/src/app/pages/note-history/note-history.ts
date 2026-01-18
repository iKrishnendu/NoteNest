import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface HistoryItem {
  action: string;
  date: Date;
}

@Component({
  selector: 'app-note-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-history.html',
})
export class NoteHistory implements OnInit {
  noteId = '';

  history: HistoryItem[] = [
    {
      action: 'Note created',
      date: new Date(),
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.noteId = this.route.snapshot.paramMap.get('id')!;
  }

  deleteForever(): void {
    const ok = confirm(
      'This will permanently delete the note. This action cannot be undone.'
    );

    if (ok) {
      alert('Note permanently deleted (backend later)');
    }
  }
}
