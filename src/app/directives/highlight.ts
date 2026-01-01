import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  
  @Input() highLightColor: string= 'blue';

  constructor(private eleRef: ElementRef) { 
    console.log("Directive Executed");
     
  }

  @HostListener('mouseenter')
  onHOver() {
    this.eleRef.nativeElement.style.color = this.highLightColor;
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.eleRef.nativeElement.style.color = "black"
  }
}
