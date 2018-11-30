import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dev-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  userId: string;
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute);
    this.userId = this.activatedRoute.snapshot.params.id;
  }

  goUsers() {
    this.router.navigateByUrl('users');
  }
}
