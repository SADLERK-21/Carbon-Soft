import { Component, Input, OnInit } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;
  @Input() viewMode: ViewMode = ViewMode.Section;
  @Input() isNoteSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public isSectionMode(): boolean {
    return this.viewMode === ViewMode.Section;
  }

  public getStyleForSelectedNote(): string {
    return this.isNoteSelected ? 'background-color: #0d0d0d; color: white; border: 2px solid #0d0d0d;' : '';
  }

  public get path(): string {
    return this.note.title.trim() + this.note.id
  }
}

export enum ViewMode {
  Section,
  Tile
}
