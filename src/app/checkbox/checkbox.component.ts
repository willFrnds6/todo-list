import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  // Create a static element. This element will be execute only one time
  private static counter = 0; 
  public id : string;

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

  ngOnInit(): void {}

}