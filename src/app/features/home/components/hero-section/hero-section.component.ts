import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonDirective } from '../../../../shared/directives/button.directive';

@Component({
  selector: 'app-hero-section',
  imports: [NgOptimizedImage, ButtonDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {}
