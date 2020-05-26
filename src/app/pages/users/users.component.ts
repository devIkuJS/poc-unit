import { Component, OnInit , Renderer2 } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { User } from "../../models/user";

@Component({
    selector: "ns-users",
    templateUrl: "./users.component.html",
})
export class UsersComponent implements OnInit {
    public title = "User Component";

    public users: User[] = [];

    constructor(private _userService: UsersService) {}

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {
        this._userService.getUsers().subscribe((users) => {
            this.users = users;
            console.log(this.users);
        });
    }

    addUser(): void {
        const user = { name: "morpheus" };

        this._userService.createUser(user).subscribe(
            (res) => {
                let id = res["id"];
                console.log("res", id);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    deleteUser(id: number): void {
        this._userService.deleteUser(id).subscribe(
            (res) => {
                console.log("res", res);
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
