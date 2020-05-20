import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  viewWork() {
    document.getElementById('about').scrollIntoView(true);
  }
}
