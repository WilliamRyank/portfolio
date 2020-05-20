import { Component, OnInit } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  projectList = [
    new Project('interview-pro', 'Interview Pro', '29 May 2020', 'Website to prepare for interview with automatic grammar checking, voice-to-text functionality, facial emotion recognition.', ['JavaScript', 'NodeJS'], 'http://interviewpro.herokuapp.com/'),
    new Project('interview-pro', 'Interview Pro', '29 May 2020', 'Website to prepare for interview with automatic grammar checking, voice-to-text functionality, facial emotion recognition.', ['JavaScript', 'NodeJS'], 'http://interviewpro.herokuapp.com/'),
    new Project('interview-pro', 'Interview Pro', '29 May 2020', 'Website to prepare for interview with automatic grammar checking, voice-to-text functionality, facial emotion recognition.', ['JavaScript', 'NodeJS'], 'http://interviewpro.herokuapp.com/')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
