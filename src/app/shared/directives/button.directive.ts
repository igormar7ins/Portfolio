import { Directive, ElementRef, Input, InputSignal, Renderer2, input } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {
  appButton: InputSignal<'primary' | 'secondary'> = input<'primary' | 'secondary'>('primary');

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'app-button');
  }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, `app-button--${this.appButton()}`);
  }
}
