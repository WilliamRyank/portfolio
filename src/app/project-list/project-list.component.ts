import { Component, OnInit } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  projectList = [
    new Project('interview-pro', 'Interview Pro', 'January 2020', 'Website to prepare for interview with automatic grammar checking, voice-to-text functionality, facial emotion recognition.', ['JavaScript', 'NodeJS'], 'http://interviewpro.herokuapp.com/'),
    new Project('organice', 'ORGANice', 'November 2019', 'Desktop application to facilitate the matching of organ transplants between patients and organ donors in hospitals.', ['Java', 'JavaFX'], 'https://ay1920s1-cs2103t-t13-1.github.io/main/')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
