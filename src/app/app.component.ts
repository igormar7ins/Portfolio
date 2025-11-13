import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroSectionComponent } from "./features/components/hero-section/hero-section.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {}
