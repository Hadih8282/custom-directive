import { Directive, ElementRef, Host, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    @Input('appAppHighlight') heightlightColor: string = 'red';

    @HostListener('mouseenter') onMouseEnter() {
      this.changeBackgroundColor(this.heightlightColor);
      // this.elementRef.nativeElement.style.backgroundColor = 'red';
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.changeBackgroundColor('transparent');
      // this.elementRef.nativeElement.style.backgroundColor = 'transparent';
    }

    private changeBackgroundColor(color: string) {
      // this.elementRef.nativeElement.style.backgroundColor = color;
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color',color);
    }


}
