import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  display = true;
  logs = [];
  constructor() { }

  ngOnInit() {
  }

  onToggle(){
  this.display = !this.display;
  this.logs.push(Date());
  }
  getColor(i){
    return i > 3 ? 'blue' : 'white';
  }
}
