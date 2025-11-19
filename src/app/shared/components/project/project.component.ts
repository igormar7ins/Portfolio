import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  title = input<string>();
  description = input<string>();
  urlImage = input<string>();
}
