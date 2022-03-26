import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-corelib',
  template: `
    <p>
      corelib works! Single Click
    </p>
  `,
  styles: [
  ]
})
export class CorelibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
