import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Reference } from '../shared';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'references',
    templateUrl: './references.component.html',
    styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {
    dataSource: MatTableDataSource<Reference>;
    references: Array<Reference> = [];
    loaded: boolean = false;
    refs: Observable<any>;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor() {
        for (var i = 0; i < 25; i++) {
            let ref = {} as Reference;
            ref.title = "Title " + i + " Here";
            ref.body = "something something";

            this.references.push(ref);
        }
    }

    ngOnInit() {
        setTimeout(() => {
            this.dataSource = new MatTableDataSource(this.references);
            this.dataSource.paginator = this.paginator;
            this.refs = this.dataSource.connect();
        }, 100);
    }
}
