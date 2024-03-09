import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './heroe-list.component.html',
  styleUrl: './heroe-list.component.css'
})
export class HeroeListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public deletedHeroe?: string;

  public removeLastHeroe():void{
    this.deletedHeroe = this.heroNames.pop();
  }
}
