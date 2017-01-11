import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'instructions-dialog',
  templateUrl: './instructions-dialog.component.html',
  styleUrls: ['./instructions-dialog.component.css']
})
export class InstructionsDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<InstructionsDialogComponent>) { }

  ngOnInit() {
  }

}
