import { Directive, ElementRef, InputSignal, Renderer2, effect, input } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {
  appButton: InputSignal<'primary' | 'secondary'> = input<'primary' | 'secondary'>('primary');
  rounded: InputSignal<boolean> = input<boolean>(false);


  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'app-button');
    
    effect(() => {
      if (this.rounded()) {
        this.renderer.addClass(this.el.nativeElement, 'app-button--rounded');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'app-button--rounded');
      }
    })
  }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, `app-button--${this.appButton()}`);
  }
}
