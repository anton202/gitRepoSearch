import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appColorStar]'
})
export class ColorStarDirective implements OnInit {
    @Input() appColorStar: boolean;

    constructor(private el: ElementRef) {}

     ngOnInit(){
        if(this.appColorStar){
            this.el.nativeElement.style.color = 'orange';
        }
     }

    @HostListener('click') onClick() {
        if (!this.appColorStar) {
            this.appColorStar = true
            this.el.nativeElement.style.color = 'orange';
        } else {
            this.appColorStar = false
            this.el.nativeElement.style.color = 'lightslategray'
        }
    }

}