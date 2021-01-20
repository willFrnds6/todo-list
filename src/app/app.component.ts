import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  
  public todoArray : Array<string> = [
    'items 1',
    'items 2',
    'items 3',
    'items 4'
  ];

  //void = bloc le return
  public addItem($event : KeyboardEvent) : void {
    const $input: HTMLInputElement|null = $event.target as HTMLInputElement;

    if($event.code === 'Enter'){
      console.log($event);
    }
    
  }
}
