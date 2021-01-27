import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-size',
  templateUrl: './app-array-size.component.html',
  styleUrls: ['./app-array-size.component.scss']
})
export class AppArraySizeComponent implements OnInit {

  @Input()
  public tab: Array <string>|null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
