import { Component, OnInit } from '@angular/core';
import { faCoffee, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dev-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public faCoffee: IconDefinition;
  constructor() { }

  ngOnInit() {
    this.faCoffee = faCoffee;
  }

}
