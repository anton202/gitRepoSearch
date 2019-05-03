import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

// this directive changes the color of the star dom element upon clicking on the element.
// also the directive recivces a boolean value through appColorStart property,
// and applies an orange color if true and a lightslatgray color if false.

@Directive({
    selector: '[appColorStar]'
})
export class ColorStarDirective implements OnInit {
    @Input() appColorStar: boolean;

    constructor(private el: ElementRef) {}

     ngOnInit(){
        if(this.appColorStar){
            this.el.nativeElement.style.color = 'orange';
        }else if(!this.appColorStar){
            this.el.nativeElement.style.color = 'lightslategray';
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