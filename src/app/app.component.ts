import { Component } from '@angular/core';
import { todoItem } from './todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  
  public todoArray : Array<todoItem> = [
    {
      title : 'items 1',
      checked : true
    },
    {
      title : 'items 2',
      checked : false
    },
    {
      title : 'items 3',
      checked : true
    },
    {
      title : 'items 4',
      checked : false
    },
  ];


  //void = aucun return
  public addItem($event : KeyboardEvent) : void {
    //const $input: HTMLInputElement|null = $event.target as HTMLInputElement;
    if($event.code === 'Enter'){
      const $input: EventTarget|null = $event.target;

      if($input instanceof HTMLInputElement){
        const valueNoSpace = $input.value.trim();
        if(valueNoSpace != ''){
          this.todoArray.push({
            title : valueNoSpace,
            checked : false
          });
          $input.value = '';
        }
      }
    }    
  }

  public removeItem(index : number) : void {
    if(index > -1 && index < this.todoArray.length){
      this.todoArray.splice(index, 1); // .splice() supprimer element d'un tableau
    }
  }
}
