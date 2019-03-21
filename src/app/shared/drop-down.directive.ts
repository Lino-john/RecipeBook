import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector : "[appDropDown]"
})
export class DropdownDirective {
    @HostBinding('class.show') isOpen = false;
    @HostListener('click') toggleOpen() {
        console.warn("clicked");
        
        this.isOpen = !this.isOpen;
    }
}
