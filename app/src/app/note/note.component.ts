import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from './note';
import { Router } from '@angular/router';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;
  @Input() isNoteSelected: boolean = false;
  @Output() noteDateOnClick = new EventEmitter<Note>()

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public getStyleForSelectedNote(): string {
    return this.isNoteSelected ? 'background-color: #0d0d0d; color: white; border: 2px solid #0d0d0d;' : '';
  }

  public get path(): string {
    return this.note.title.trim() + this.note.id
  }

  public onNoteClick() {
    this.noteDateOnClick.emit(this.note);
    this.router.navigate(['notes', { id: this.path }])
  }
}
