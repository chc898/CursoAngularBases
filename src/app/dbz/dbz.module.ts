import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCaracterComponent } from './components/add-caracter/add-caracter.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCaracterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
