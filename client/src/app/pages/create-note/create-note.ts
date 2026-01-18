import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-note.html',
})
export class CreateNote {
  title = '';
  content = '';
  files: File[] = [];

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;

    this.files = Array.from(input.files);
  }

  removeFile(index: number) {
    this.files.splice(index, 1);
  }

  createNote() {
    console.log({
      title: this.title,
      content: this.content,
      files: this.files,
    });

    alert('Note created (backend later)');
  }
}
