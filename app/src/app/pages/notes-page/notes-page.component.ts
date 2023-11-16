import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes-page.service';
import { Note } from 'src/app/note/note';

@Component({
  selector: 'notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit {
  public notesList: Note[];

  constructor(
    private noteService: NotesService
  ) { }

  ngOnInit(): void {
    this.notesList = this.noteService.getNotes();
  }
}
