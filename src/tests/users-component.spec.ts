import "reflect-metadata";
import { UsersComponent } from "../app/pages/users/users.component";
import {
    nsTestBedBeforeEach,
    nsTestBedAfterEach,
    nsTestBedRender,
} from "nativescript-angular/testing";
import { UsersService } from "../app/services/users.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture } from "@angular/core/testing";
import { User } from "~/app/models/user";
import { of } from "rxjs";

describe("UserComponent", () => {
    let usersComponent: UsersComponent;
    //let  usersService : UsersService;
    let usersService = new UsersService(null);

    beforeEach(
        nsTestBedBeforeEach(
            [UsersComponent],
            [UsersService],
            [HttpClientTestingModule]
        )
    );
    afterEach(nsTestBedAfterEach(false));

    beforeEach(() => {
        usersComponent = new UsersComponent(usersService);
    });

    it("Debe crear un componente", () => {
        return nsTestBedRender(UsersComponent).then(
            (fixture: ComponentFixture<UsersComponent>) => {
                const component = fixture.debugElement.componentInstance;
                expect(component).toBeTruthy();
            }
        );
    });

    it("Debe llamar a UsersService y el metodo getUsers() para obtener los usuarios", () => {
        //listDemoUser = Objeto simulado de nuestra respuesta
        let listDemoUser: User[] = [
            {
                id: 1,
                email: "george.bluth@reqres.in",
                first_name: "George",
                last_name: "Bluth",
                avatar:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
            },
            {
                id: 2,
                email: "janet.weaver@reqres.in",
                first_name: "Janet",
                last_name: "Weaver",
                avatar:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
            },
        ];

        const users = spyOn(usersService, "getUsers").and.callFake(() => {
            return of(listDemoUser);
        });

        usersComponent.ngOnInit();

        expect(users).toHaveBeenCalled();
    });

    it("Debe de llamar al servidor para agregar un user", () => {
        const users = spyOn(usersService, "createUser").and.callFake(() => {
            return of();
        });

        usersComponent.addUser();

        expect(users).toHaveBeenCalled();
    });

    /* it("Debe de agregar un nuevo user", () => {
        const user  = {
            email: "brianhuamani@bcp.com.pe",
            first_name: "Brian",
            last_name: "Huamani",
            avatar:
                "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
        };

        spyOn(usersService, 'createUser').and.returnValue(from(user));

        spyOn(usersService, "createUser").and.returnValue(from(user));

        usersComponent.addUser();

        expect(usersComponent.users.indexOf(user)).toBeGreaterThanOrEqual(0);
        
    });
    */

    it("Debe de llamar al servidor para borrar un user", () => {
        const users = spyOn(usersService, "deleteUser").and.callFake(() => {
            return of();
        });

        usersComponent.deleteUser(2);

        expect(users).toHaveBeenCalledWith(2);
    });
});
