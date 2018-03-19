import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated//None
})
export class ServerElementComponent implements OnInit {
@Input('srvElement') element: {type: string, name: string, content: string};  //this is how you define the type of Javascript object.

  constructor() { }

  ngOnInit() {
  }

}
