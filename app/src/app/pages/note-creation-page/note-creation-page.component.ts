import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NotesService } from '../notes-page/notes-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'note-creation-page',
  templateUrl: './note-creation-page.component.html',
  styleUrls: ['./note-creation-page.component.scss']
})
export class NoteCreationPageComponent implements OnInit {

  public noteText: string;
  public noteTitle: string;

  constructor(
    private notesService: NotesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    toolbarHiddenButtons: [
      [
        'subscript',
        'superscript',
        'fontName'
      ],
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'toggleEditorMode'
      ]
    ]
  };

  public submitNote() {
    if (this.noteTitle.length > 0) {
      if (this.noteText.length > 0) {
        this.notesService.addNote({
          text: this.noteText,
          title: this.noteTitle
        }, this.router);
      } else {
        alert("You need to set the Note Text");
      }
    } else {
      alert("You need to set the Note title");
    }
  }
}
