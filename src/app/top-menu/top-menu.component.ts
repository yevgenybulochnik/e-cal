import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FileLoadDialogComponent } from '../fileload-dialog/fileload-dialog.component';

@Component({
  selector: 'cal-top-menu',
  template: `
    <div class='cal-years'>
      <div class='year-label'>Years</div>
      <button mat-stroked-button>2016</button>
      <button mat-stroked-button>2015</button>
    </div>
    <div class='options'>
      <button (click)='openFileLoadDialog()' class='upload-file' mat-stroked-button>Upload File</button>
    </div>
  `,
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openFileLoadDialog(): void {
    const dialogRef = this.dialog.open(FileLoadDialogComponent, {});
  }

}
