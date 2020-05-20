import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  skills = ["Javascript", "Java", "Python", 
            "C", "HTML", "CSS", "NodeJS", 
            "Angular", "Redux", "ReactJS"]
  constructor() { }

  ngOnInit(): void {
  }

}
