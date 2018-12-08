import { Directive, OnInit, ElementRef, HostListener, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class AppDropdownDirective implements OnInit {
  // binds to the property of the element where this directive is present
  @HostBinding('class.open') isOpen: Boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {  }

  ngOnInit() { }

  // @HostListener('mouseenter') mouseover() {

  //   this.renderer.addClass(this.elementRef.nativeElement, 'open');
  //   console.log('dropdown class added to: ', this.elementRef.nativeElement);

  // }

  // @HostListener('mouseleave') mouseleave() {

  //   this.renderer.removeClass(this.elementRef.nativeElement, 'open');
  //   console.log('drop down class removed from: ', this.elementRef.nativeElement);

  // }

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
  }
}

