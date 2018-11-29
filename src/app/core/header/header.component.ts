import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public logo = '../assets/logo.svg';
  public env: string;
  constructor() { }

  ngOnInit() {
    this.title = 'angular-devoteam';
    this.env = environment.api;
  }

}
