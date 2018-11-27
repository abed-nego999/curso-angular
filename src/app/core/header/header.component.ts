import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'dev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public logo: string;
  public env: string;
  constructor() { }

  ngOnInit() {
    this.title = 'angular-devoteam';
    this.logo = '../assets/logo.svg';
    this.env = environment.api;
  }

}
