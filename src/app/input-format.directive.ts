import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'util';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;

  @HostListener('focus') onFocus () {
    console.log("on Focus");
  }

  @HostListener('blur') onBlur () {
    let value: string = this.el.nativeElement.value;

    if (this.format == 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
    
    console.log("on blur");
  }

  constructor(private el: ElementRef) { }

}
