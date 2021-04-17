import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  room: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  startSessionCall(): void {
    this.router.navigate(['session-call/' + this.room]);
  }

}
