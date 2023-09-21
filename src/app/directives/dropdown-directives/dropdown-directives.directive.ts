import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdownDirectives]',
})
export class DropdownDirectivesDirective {
  @Input() defautclass: string = 'show';
  @Input('appDropdownDirectives') customclass: string = '';
  @HostBinding('class') classes: string = this.defautclass;

  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  @HostListener('click')
  public toggler(): void {
    this.classes = this.customclass ? this.customclass : this.defautclass;
    this.toggleDropdown(this.classes);
    // console.log(this.elementRef.nativeElement.nextElementSibling);

    // this.elementRef.nativeElement.nextElementSibling.classList.add('show')
  }
  @HostListener('document:keydown', ['$event'])
  public Onkeydown(event: KeyboardEvent) {
    if (event.key == 'Escape') {
      this.removeclass(this.classes);
    }
  }
  @HostListener('document:click', ['$event.target'])
  public OnclickOutside(targetElement: HTMLElement | null) {
    // console.log(targetElement);
    if (targetElement === null) {
      return;
    }

    const dropdown = this.elementRef.nativeElement.parentElement;
    const clickedInside = dropdown?.contains(targetElement);
    // console.log(clickedInside);
    // console.log(targetElement);
    if (!clickedInside) {
      this.removeclass(this.classes);
    }
  }

  private toggleDropdown(className: string) {
    const dropdownMenu = this.elementRef.nativeElement.nextElementSibling;
    const hasShowClass = dropdownMenu?.classList.contains(className);
    if (hasShowClass) {
      this.removeclass(className);
    } else {
      this.addClass(className);
    }
  }

  private addClass(className: string) {
    const dropdownMenu = this.elementRef.nativeElement.nextElementSibling;
    this.render.addClass(dropdownMenu, className);
  }
  private removeclass(className: string) {
    const dropdownMenu = this.elementRef.nativeElement.nextElementSibling;
    this.render.removeClass(dropdownMenu, className);
  }
}
