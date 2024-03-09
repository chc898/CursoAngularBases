import { NgModule } from "@angular/core";
import { HeroeComponent } from "../heroe/heroe.component";
import { HeroeListComponent } from "../list/heroe-list/heroe-list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    HeroeComponent,
    HeroeListComponent
  ],
  exports:[
    HeroeComponent,
    HeroeListComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule{}
