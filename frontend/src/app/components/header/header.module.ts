import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LogoComponent } from "./logo/logo.component";
import { MenuComponent } from "./menu/menu.component";
import { NavegacionComponent } from "./navegacion/navegacion.component";

@NgModule({
    declarations: [
        LogoComponent,
        MenuComponent,
        NavegacionComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        LogoComponent,
        MenuComponent,
        NavegacionComponent,
    ]
})
export class HeaderModule { }