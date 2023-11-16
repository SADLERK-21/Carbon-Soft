import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes-page.service';
import { Note } from 'src/app/note/note';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit {

  public notesList: Note[];
  public noteText: string;
  private selectedNoteTitle: string;


  constructor(
    private noteService: NotesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.notesList = this.noteService.getNotes();
    this.route.params.subscribe(params => {
      this.selectedNoteTitle = params['id'];
    })
  }

  public isNoteSelected(note: Note): boolean {
    if (note.title.trim() + note.id === this.selectedNoteTitle) {
      this.noteText = note.text;
      return true;
    }
    return false;
  }

  public get noteTextHtml(): string {
    return this.noteText;
  }
}
