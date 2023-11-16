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
  constructor() { }

  ngOnInit(): void {
  }

  public isSectionMode(): boolean {
    return this.viewMode === ViewMode.Section;
  }

}

export enum ViewMode {
  Section,
  Tile
}
