import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({// Un décorateur permet de ajouter des infos dans une balise et est précédé d'un @
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  // Create a static element. This element will be execute only one time
  private static counter = 0; 
  public id: string;

  @Input()// Permet d'ajouter un attribut label dans notre <app-checkbox></app-checkbox>
  public label: string|null = null;

  constructor() {
    /* 1er methode
      // Generate a random nomber beteween 0 and 1 000 000 for id checkbox
      let rand = Math.random();
      rand = rand * 1000000;
      Math.round(rand);

      this.id = 'app-checkbox-' + rand;
    */

    // Static methode
    this.id = 'app-checkbox-' + CheckboxComponent.counter;
    CheckboxComponent.counter++;
  }

  @Output()
  public checkedChange = new EventEmitter();

  private internalChecked = false;
  
  public get checked(): boolean{
    return this.internalChecked;
  }

  @Input()
  public set checked(val : boolean){
    this.internalChecked = val;
    this.checkedChange.emit(this.internalChecked);
  }

  ngOnInit(): void {}

}