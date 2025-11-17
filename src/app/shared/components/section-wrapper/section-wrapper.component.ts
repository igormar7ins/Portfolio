import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-wrapper',
  imports: [],
  templateUrl: './section-wrapper.component.html',
  styleUrl: './section-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionWrapperComponent {
  title = input<string>();
  subtitle = input<string>();
  textAlign = input<'left' | 'center' | 'right'>('center');
}
