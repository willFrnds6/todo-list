import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  public id : string;

  constructor() {
    // Generate a random nomber beteween 0 and 1 000 000 for id checkbox
    let rand = Math.random();
    rand = rand * 1000000;
    Math.round(rand);

    this.id = 'app-checkbox-' + rand;
  }

  ngOnInit(): void {
  }

}