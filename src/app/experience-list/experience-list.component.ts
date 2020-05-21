import { Component, OnInit } from '@angular/core';
import { Experience } from './experience';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {
  experienceList = [
    new Experience(
      'Traveloka', 
      'Singapore', 
      'Software Engineering Intern', 
      ['Developed operational tools for loan fraud tagging and pricing simulation.', 
      'Increased the unit test coverage for the website and operational tools.', 
      'Improved the End-to-End test coverage for the website.', 
      'Worked in an agile environment'],
      ['ReactJS', 'Redux', 'Jest', 'TestCafe'])
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
