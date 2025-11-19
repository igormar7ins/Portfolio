import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonDirective } from '../../../../shared/directives/button.directive';
import { ProfileService } from '../../../../core/services/profile.service';

@Component({
  selector: 'app-hero-section',
  imports: [NgOptimizedImage, ButtonDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  private profileService = inject(ProfileService);
  public profile = this.profileService.profile;
}

