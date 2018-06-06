import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    @ViewChild("wrapper", {read: ElementRef}) wrapper: ElementRef;

    constructor(
        public router: Router,
        public overlayContainer: OverlayContainer
    ) {
    }

    ngOnInit(): void {
        var themeId = localStorage.getItem('themeId');
        if (+themeId === 1) {
            this.wrapper.nativeElement.className = "kapios-theme--dark";
            this.overlayContainer.getContainerElement().classList.add("kapios-theme--dark");
        } else {
            this.wrapper.nativeElement.className = "kapios-theme--light";
            this.overlayContainer.getContainerElement().classList.add("kapios-theme--light");
        }

    }

    isAuthenticated(): boolean {
        return this.router.url !== '/login';
    }

    changeTheme(theme: string): void {
        this.wrapper.nativeElement.className = theme;
        this.overlayContainer.getContainerElement().className = "cdk-overlay-container " + theme; 
    }
}
