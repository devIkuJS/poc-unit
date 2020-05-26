import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";


import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
    { path: "", redirectTo: "/users", pathMatch: "full" },
    { path: "users", component: UsersComponent }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
