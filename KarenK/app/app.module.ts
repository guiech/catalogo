import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ShoeService } from "./shared/shoes/shoes.service";

import { ListComponent } from "./pages/list/list.component";
import { ShoeComponent } from "./pages/shoe/shoe.component";
import { AppHomeComponent } from "./pages/app-home/app-home.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ListComponent,
        ShoeComponent,
        AppHomeComponent

    ],
    providers: [
        ShoeService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
