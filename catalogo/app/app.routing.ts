import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ListComponent } from "./pages/list/list.component";
import { ItemComponent } from "./pages/item/item.component";

const routes: Routes = [
    { path: "", redirectTo: "/list", pathMatch: "full" },
    { path: "list", component: ListComponent },
    { path: "item/:id", component: ItemComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }