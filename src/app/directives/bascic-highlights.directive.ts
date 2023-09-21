import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector : '[appBasicHighlight]'
})


export class BasicHiglight implements OnInit{
    constructor(private elementRef:ElementRef){}
    ngOnInit(): void {
        this.elementRef.nativeElement.style.background = 'green'
        this.elementRef.nativeElement.style.fontSize = '24px'
    }
}