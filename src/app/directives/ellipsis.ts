import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEllipsis]',
})
export class Ellipsis implements OnInit {

  @Input() maxCharactorToShow: number = 0;
  @Input() textToDisplay: string = '';

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {
    

  }

  ngOnInit(): void {
    
    if (this.textToDisplay.length > this.maxCharactorToShow) {
      const limitCharText = this.textToDisplay.slice(0, 20) + "..";
      //this.eleRef.nativeElement.innerText =limitCharText;
      this.renderer.setProperty(this.eleRef.nativeElement,'innerText',limitCharText)

      this.renderer.setAttribute(this.eleRef.nativeElement,'title',this.textToDisplay)
      
    }
  }

}
