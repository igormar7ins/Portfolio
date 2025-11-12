import { Component } from '@angular/core';
import { ButtonDirective } from '../../directives/button.directive';

@Component({
  selector: 'app-header',
  imports: [ButtonDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
