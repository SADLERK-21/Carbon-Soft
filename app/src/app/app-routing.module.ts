import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';
import { NoteCreationPageComponent } from './pages/note-creation-page/note-creation-page.component';


export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: StartPageComponent },
  { path: 'notes', component: NotesPageComponent },
  { path: 'notes/:id', component: NotesPageComponent },
  { path: 'notes-creation', component: NoteCreationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
