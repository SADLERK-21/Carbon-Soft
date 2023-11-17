import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Note } from "src/app/note/note";

Injectable()
export class NotesService {

    private noteIdForGeneration = 1;
    public notes: Note[] = [];

    public addNote(noteTitle: string, noteText: string, router: Router) {
        if (noteTitle && noteText && router) {
            this.notes.unshift(
                {
                    title: noteTitle,
                    text: noteText,
                    id: this.generateNoteId()
                }
            );
            router.navigate(['notes']);
        }
    }

    public deletNote(id: number) {
        this.notes = this.notes.filter(note => note.id !== id);
    }

    private generateNoteId() {
        if (this.notes.some(note => note.id === this.noteIdForGeneration)) {
            this.noteIdForGeneration++
            return this.generateNoteId()
        } else {
            let result = this.noteIdForGeneration;
            this.noteIdForGeneration = 1;
            return result;
        }

    }
}