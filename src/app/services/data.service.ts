import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { csvParse } from 'd3';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Observable<any>;
  private _fileSource = new Subject();
  constructor() {
    this.data = this._fileSource.asObservable();
  }
  readFile(file: File, sample = false) {
    console.log('test');
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(reader.result);
      const parsedData = csvParse(reader.result, (rowData, index) => {
        if (sample) {
          if (index < 5) { return rowData; }
        } else {
          return rowData;
        }
      });
      this._fileSource.next(parsedData);
    };
    if (sample) {
      reader.readAsBinaryString(file.slice(0, 1000));
    } else {
      reader.readAsBinaryString(file);
    }
  }
}
