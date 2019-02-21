import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html',
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
    @ViewChild("themer", {read: ElementRef}) themer: ElementRef;
    @Output() currentTheme = new EventEmitter(); 
    theme: string;

    constructor() {}
    ngOnInit() {
        this.theme = "theme-light"; 
    }

    setTheme(id: number): void {
        localStorage.setItem('themeId', id.toString());
        switch (id) {
            case 1: {
                this.theme = "theme-dark";  
                this.themer.nativeElement.classList.remove("toolbar-themer--light");
                this.themer.nativeElement.classList.add("toolbar-themer--dark");
                break;
            } 
            default: {
                this.theme = "theme-light";
                this.themer.nativeElement.classList.remove("toolbar-themer--dark");
                this.themer.nativeElement.classList.add("toolbar-themer--light");
                break;
            }
        }
        this.currentTheme.emit(this.theme);
    }
}
