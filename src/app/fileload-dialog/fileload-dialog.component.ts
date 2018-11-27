import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'cal-fileload-dialog',
  template: `
    <p>
      fileload-dialog works!
    </p>
    <button mat-stroked-button (click)='closeDialog()'>Cancel</button>
    <button mat-stroked-button (click)="fileInput.click()">
      <span>Select</span>
      <input #fileInput type="file" (change)="onFileInput($event)" style="display:none;" />
    </button>
  `,
  styles: []
})
export class FileLoadDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FileLoadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
