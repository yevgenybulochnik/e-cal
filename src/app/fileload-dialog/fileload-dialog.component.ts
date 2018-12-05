import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { csvParse } from 'd3';

@Component({
  selector: 'cal-fileload-dialog',
  templateUrl: './fileload-dialog.component.html',
  styleUrls: ['./fileload-dialog.component.scss']
})
export class FileLoadDialogComponent implements OnInit {
  filePlaceHolder = 'No File Selected';
  fileColumns: string[];
  fileDataRows: any[];
  constructor(
    public dialogRef: MatDialogRef<FileLoadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataservice: DataService
  ) {
    dialogRef.disableClose = true;
    this.dataservice.data.subscribe(d => {
      this.fileColumns = d.columns;
      this.fileDataRows = d.slice(0, 4);
    });
  }

  ngOnInit() {
  }

  onFileInput(files: FileList): void {
    const file = files[0];
    if (file) {
      this.filePlaceHolder = file.name;
      this.dataservice.readFile(file, true);
    } else {
        this.fileColumns = [];
        this.fileDataRows = [];
        this.filePlaceHolder = 'No File Selected';
    }
  }

  generateDataString(rowObject) {
    return Object.values(rowObject);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
