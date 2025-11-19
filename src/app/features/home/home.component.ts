import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { SectionWrapperComponent } from '../../shared/components/section-wrapper/section-wrapper.component';
import { ProjectComponent } from "../../shared/components/project/project.component";
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, SectionWrapperComponent, ProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private profileService = inject(ProfileService);
  public profile = this.profileService.profile;
}
