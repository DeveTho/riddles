import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { Riddle, RiddlesService } from '../riddles.service';
import { InstructionsDialogComponent } from '../instructions-dialog/instructions-dialog.component';

export interface IRiddleCounts {
  wordCount: number,
  notStarted: number,
  running: number,
  hintsUsed: number,
  givenUp: number,
  solved: number
}

@Component({
  selector: 'riddles',
  templateUrl: './riddles.component.html',
  styleUrls: ['./riddles.component.css']
})
export class RiddlesComponent implements OnInit {

  riddles: Array<Riddle>;

  constructor(public dialog: MdDialog, private riddlesService: RiddlesService) { }

  ngOnInit() {
    this.getRiddles();
  }

  openInstructions(): void {
    this.dialog.open(InstructionsDialogComponent);
  }

  backup(): void {
    this.riddlesService.backup();
  }

  restore(): void {
    this.riddlesService.restore();
  }

  getRiddles(): void {
    this.riddles = this.riddlesService.getAll();
  }

  getRiddleCounts(): IRiddleCounts {
    return {
      wordCount: this.riddles.filter(r => r.solved === true || r.failed === true).reduce((currentCount, riddle) => currentCount + riddle.words, 0),
      notStarted: this.riddles.filter(r => r.busy === false).length,
      running: this.riddles.filter(r => r.busy === true && r.solved === false && r.failed === false).length,
      hintsUsed: this.riddles.filter(r => r.hint === true).length,
      givenUp: this.riddles.filter(r => r.failed === true).length,
      solved: this.riddles.filter(r => r.solved === true).length
    };
  }

  startRiddle(riddle: Riddle): void {
    riddle.busy = true;
  }

  getHint(riddle: Riddle): void {
    riddle.hint = true;
    riddle.words = Math.floor(riddle.words / 2);
  }

  giveUp(riddle: Riddle): void {
    riddle.failed = true;
    riddle.words = 0;
  }

  solve(riddle: Riddle): void {
    riddle.solved = true;
  }

  showAnswer(riddle: Riddle): void {
    riddle.showAnswer = true;
  }
}