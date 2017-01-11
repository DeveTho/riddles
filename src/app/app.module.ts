import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { RiddlesComponent } from './riddles/riddles.component';
import { AnswersComponent } from './answers/answers.component';
import { InstructionsDialogComponent } from './instructions-dialog/instructions-dialog.component';
import { EventComponent } from './event/event.component';
import { RiddlesService } from './riddles.service';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    RiddlesComponent,
    AnswersComponent,
    InstructionsDialogComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    MaterialModule.forRoot()
  ],
  providers: [
    RiddlesService
  ],
  entryComponents: [
    InstructionsDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
