import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BuscadorComponent } from "./buscador/buscador.component";
import { LogoComponent } from "./logo/logo.component";
import { MenuComponent } from "./menu/menu.component";
import { NavegacionComponent } from "./navegacion/navegacion.component";

@NgModule({
    declarations: [
        LogoComponent,
        MenuComponent,
        NavegacionComponent,
        BuscadorComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        LogoComponent,
        MenuComponent,
        NavegacionComponent,
        BuscadorComponent
    ]
})
export class HeaderModule { }