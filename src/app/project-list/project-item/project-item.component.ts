import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: Project;
  @Input() delay: number;
  constructor() { }

  ngOnInit(): void {
  }

}
