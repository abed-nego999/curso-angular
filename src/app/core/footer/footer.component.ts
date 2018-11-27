import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-footer',
  template: `
    <p>
      footer works!
    </p>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
