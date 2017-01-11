import { Component, OnInit } from '@angular/core';

import { Riddle, RiddlesService } from '../riddles.service';

@Component({
  selector: 'answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  riddles: Array<Riddle>;
  showContent: boolean = false;
  showAnswers: boolean = false;

  constructor(private riddlesService: RiddlesService) { }

  ngOnInit() {
    this.riddles = this.riddlesService.getAll();
  }

  backup(): void {
    this.riddlesService.backup();
  }

  restore(): void {
    this.riddlesService.restore();
  }

}
