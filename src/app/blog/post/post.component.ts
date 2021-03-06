import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dev-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() autor: string;
  @Input() titulo: string;

  constructor() { }

  ngOnInit() {
  }

}
