import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-note.html',
})
export class ViewNote implements OnInit {
  noteId = '';

  // Dummy data (backend later)
  title = 'Sample Shared Note';
  content = `
This is a shared note on NoteNest.

You can share:
• Text
• Code
• Ideas
• Documents

No login required.
`;

  files = [
    { name: 'resume.pdf', size: '420 KB' },
    { name: 'design.png', size: '1.2 MB' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.noteId = this.route.snapshot.paramMap.get('id')!;
  }

  requestDelete() {
    alert('Delete request sent to owner (backend later)');
  }

  downloadAll() {
    alert('Download all files (backend later)');
  }
}
