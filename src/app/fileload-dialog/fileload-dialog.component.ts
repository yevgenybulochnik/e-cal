import { Component, Inject, OnInit } from '@angular/core';
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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
  }

  // Function needs to be refactored, split out reader.onload callback
  onFileInput(files: FileList): void {
    const file = files[0];
    if (file) {
      this.filePlaceHolder = file.name;
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileByteString = reader.result;
        const parsedData = csvParse(fileByteString, (rowData, index) => {
          if ( index < 5  ) { return rowData; }
        });
        this.fileColumns = parsedData.columns;
        this.fileDataRows = parsedData.slice(0, 4);
      };
      reader.readAsBinaryString(file);
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
