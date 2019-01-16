import { Component } from '@angular/core';
import { projects } from 'src/app/data/projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  myProjects = new projects();
  data = this.myProjects.getdata();
}
