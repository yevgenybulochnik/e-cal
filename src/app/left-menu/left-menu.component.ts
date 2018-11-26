import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cal-left-menu',
  template: `
    <div class='spacer'></div>
    <div class='clinics'>
      <div class='label'>Clinics</div>
      <button mat-stroked-button>OSV</button>
      <button mat-stroked-button>OMW</button>
    </div>
    <div class='providers'>
      <div class='label'>Providers</div>
      <button mat-stroked-button>YBS</button>
      <button mat-stroked-button>EC</button>
    </div>
  `,
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
