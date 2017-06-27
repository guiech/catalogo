import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ListComponent } from "./pages/list/list.component";
import { ShoeComponent } from "./pages/shoe/shoe.component";
import { AppHomeComponent } from "./pages/app-home/app-home.component";


const routes: Routes = [
    { path: "", redirectTo: "/list", pathMatch: "full" },
    { path: "home", component: AppHomeComponent },
    { path: "list", component: ListComponent },
    { path: "shoe/:id", component: ShoeComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }