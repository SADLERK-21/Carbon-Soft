import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Note } from "src/app/note/note";

Injectable()
export class NotesService {
    private noteIdForGenerate = 1;

    private notes: Note[] = [];

    public addNote(note: Note, router: Router) {
        if (note) {
            note.id = this.generateNoteId();
            this.notes.unshift(note);
            router.navigate(['notes', { id: note.title.trim() + note.id }]);
        }
    }

    public getNotes(): Note[] {
        return this.notes;
    }

    private generateNoteId() {
        if (this.notes.some(note => note.id === this.noteIdForGenerate)) {
            this.noteIdForGenerate++
            this.generateNoteId()
        } else {
            let result = this.noteIdForGenerate;
            this.noteIdForGenerate = 1;
            return result;
        }

    }
}