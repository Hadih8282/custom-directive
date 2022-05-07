import { Directive, Host, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorful]',
})
export class ColorfulDirective {
  availableColors = [
    'red',
    'black',
    'silver',
    'maroon',
    'purple',
    'fuchsia',
    'green',
    'lime',
    'olive',
    'navy',
    'blue',
    'brown',
    'chocolate',
  ];

  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;
  @HostListener('keydown') newColor() {
    const randomColorIndex = Math.floor(
      Math.random() * this.availableColors.length
    );
    this.color = this.borderColor = this.availableColors[randomColorIndex];
  }
}
