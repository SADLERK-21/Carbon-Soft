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
  public editorConfig = editorConfig;

  constructor(
    private notesService: NotesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public submitNote() {
    if (this.noteTitle.length > 0) {
      if (this.noteText.length > 0) {
        this.notesService.addNote(
          this.noteTitle.trim(),
          this.noteText,
          this.router
        );
      }
    }
  }

  public isSubmitButtonDisabled(): boolean {
    return this.noteTitle == null ||
      this.noteText == null ||
      this.noteTitle.length <= 0 ||
      this.noteText.length <= 0
  }

  public disabledButonStyle(): string {
    return this.isSubmitButtonDisabled() ? 'background-color: #3b3b3b; color: black; border: 2px solid #3b3b3b;' : '';
  }

  public close() {
    this.noteText = "";
    this.noteTitle = "";

    this.router.navigate(['']);
  }
}

const editorConfig: AngularEditorConfig = {
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
}
