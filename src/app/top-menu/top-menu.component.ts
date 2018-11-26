import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cal-top-menu',
  template: `
    <div class='cal-years'>
      <div class='year-label'>Years</div>
      <button mat-stroked-button>2016</button>
      <button mat-stroked-button>2015</button>
    </div>
    <div class='options'>
      <button class='upload-file' mat-stroked-button>Upload File</button>
    </div>
  `,
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
