import { Component } from '@angular/core';
import { todoItem } from './todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  
  public todoArray : Array<todoItem> = [];


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

  public get atLeastOneChecked() : boolean {
    for(let item of this.todoArray){
      if(item.checked === true){
        return true;
      }
    }
    return false;
  }

  public clearCompleted() : void {
    /*
      for(let i = 0; i < this.todoArray.length; i++){
        if(this.todoArray.checked === true){
          this.todoArray.splice(i, 1);
        }
      } //ERREUR suprime 1/2 SOLUTION, lire todoArray a l'envers !
    */
    for(let i = this.todoArray.length -1; i >= 0; i--){ //lecture à l'envers du tab
      if(this.todoArray[i].checked === true){
        this.todoArray.splice(i, 1);
      }
    } 
  }
}
