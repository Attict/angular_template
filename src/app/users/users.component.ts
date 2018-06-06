import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SharedModule, User } from '../shared';

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    displayedColumns = ['username', 'name', 'group', 'lastOnline', 'options'];
    dataSource: MatTableDataSource<User>;
    users: User[] = [];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor() {
        // Create `TEMP` users
        for (let i = 0; i < 100; i++) {
            let user = {} as User;
            user.username = "Username " + i;
            user.group = "User";
            if (i % 5 == 0 || i % 6 == 0) {
                user.group = "Administrator";
            }
            user.lastOnline = "08-04-2013 at 2:09 PM";
            user.name = "Fname Lname";
            user.options = "Delete";

            this.users.push(user);
        }
    }

    ngOnInit() {
        setTimeout(() => {
            this.dataSource = new MatTableDataSource(this.users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }, 100);
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue; 
    }

    editUser(): void {

    }


}
