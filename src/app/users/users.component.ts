import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SharedModule, User } from '../shared';
import { EditUserDialog } from './edit-user.dialog';

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


    constructor(
        public dialog: MatDialog
    ) {
        // Create `TEMP` users
        for (let i = 0; i < 100; i++) {
            let user = {} as User;
            user.username = "Username " + i;
            user.email = "Email " + i;
            user.group = "User";
            if (i % 5 == 0 || i % 6 == 0) {
                user.group = "Administrator";
            }
            user.lastOnline = "08-04-2013 at 2:09 PM";
            user.name = "Fname Lname";
            user.options = "Delete";
            user.active = true;

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

    editUser(user: User): void {
        let editDialog = this.dialog.open(EditUserDialog, {
            width: '500px',
            data: {
                user: user 
            }
        });
    }


}
