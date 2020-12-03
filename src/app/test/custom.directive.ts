import { Directive, HostBinding, HostListener } from '@angular/core';
import { NgModuleResolver } from '@angular/compiler';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor() { }
  @HostBinding('class') name = '';

  @HostListener('mouseover') mseover() {
    this.name = 'classadded';
  }

}
