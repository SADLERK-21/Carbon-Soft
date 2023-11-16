import { Injectable } from "@angular/core";
import { Note } from "src/app/note/note";

Injectable()
export class NotesService {
    private notes: Note[] = [
        { title: "some1", text: "dsadsadsadsadas" },
        { title: "some1", text: "dsadsadsadsadas" },
        { title: "some1", text: "dsadsadsadsadas" }
    ];

    public addNote(note: Note) {
        if (note) {
            this.notes.unshift(note);
        }
    }

    public getNotes(): Note[] {
        return this.notes;
    }
}