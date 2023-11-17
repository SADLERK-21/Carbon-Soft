import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NotesService } from './notes-page.service';
import { Note } from 'src/app/note/note';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesPageComponent implements OnInit, OnDestroy {

  public notesList: Note[];
  public noteText: string;
  private selectedNoteTitle: string;
  private routeSubscription: Subscription;


  constructor(
    public noteService: NotesService,
    private route: ActivatedRoute,
    private changeDetectionRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.selectedNoteTitle = params['id'];
    });
    this.changeDetectionRef.markForCheck();
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  public isNoteSelected(note: Note): boolean {
    if (note.title.trim() + note.id === this.selectedNoteTitle) {
      return true;
    }
    return false;
  }

  public selectNote(note: Note) {
    this.noteText = note.text;
    this.changeDetectionRef.markForCheck();
  }

  public deleteNote(note: Note) {
    this.noteService.deletNote(note.id);
    this.noteText = "";
    this.changeDetectionRef.markForCheck();
  }
}
