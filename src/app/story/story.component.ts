import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  words: string = '';

  mostRecentWords: number = 12;

  story: string = '';
  wordCount: number = 0;

  running: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  backup(): void {
    localStorage.setItem('story', JSON.stringify({
      story: this.story,
      wordCount: this.wordCount
    }));
  }

  restore(): void {
    var data = JSON.parse(localStorage.getItem('story'));

    this.story = data.story;
    this.wordCount = data.wordCount;
  }

  addWords(): void {
    this.story += ' ' + this.words;
    this.wordCount += this.words.split(' ').length;
    this.words = '';
  }

  endStory(): void {
    this.running = false;
  }

  startStory(): void {
    this.words = '';
    this.story = '';
    this.wordCount = 0;
    this.running = true;
  }

  getMostRecentWords(): string {
    if (this.mostRecentWords === 0) {
      return '';
    }

    return this.story.split(' ').slice(- this.mostRecentWords).join(' ');
  }
}
