import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') toggle = false;
    @HostListener('click') toggleOpen() {
        this.toggle = !this.toggle;
    }
    constructor() {}
}
