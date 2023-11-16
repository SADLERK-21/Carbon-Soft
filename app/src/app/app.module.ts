import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { NoteComponent } from './note/note.component';
import { NotesService } from './pages/notes-page/notes-page.service';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    NotesPageComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
