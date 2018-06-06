import { Component, OnInit } from '@angular/core';
import { Reference } from '../shared';

@Component({
    selector: 'references',
    templateUrl: './references.component.html',
    styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {
    refs: Array<Reference> = [];
    loaded: boolean = false;

    constructor() {}
    ngOnInit() {
        for (var i = 0; i < 5; i++) {
            let ref = {} as Reference;
            ref.title = "Title " + i + " Here";
            ref.body = "something something";

            this.refs.push(ref);
        }
    }
}
