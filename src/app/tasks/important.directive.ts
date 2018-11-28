import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[devImportant]'
})
export class ImportantDirective implements OnInit {

  @Input() devImportant: string;
  private eTarget: ElementRef;
  private isHighlighted = false;

  constructor(eTarget: ElementRef) {
    this.eTarget = eTarget;
  }

  ngOnInit(): void {
    if (this.devImportant) {
      const html = `¡${this.devImportant}!: ` + this.eTarget.nativeElement.innerHTML;
      this.eTarget.nativeElement.innerHTML = html;
    }
  }

  @HostListener('click')
  cambiarColor() {
    if (this.isHighlighted) {
      this.eTarget.nativeElement.style = '';
      this.isHighlighted = false;
    } else {
      this.eTarget.nativeElement.style = 'background-color: red';
      this.isHighlighted = true;
    }
  }

}
