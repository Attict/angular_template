import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'layout-side',
    templateUrl: './side.component.html',
    styleUrls: ['./layout.css']
})
export class SideComponent implements OnInit {
    constructor(
        public router: Router
    ) {}

    ngOnInit() {}

    goTo(url: String): void {
        this.router.navigate([url]);    
    }
}
