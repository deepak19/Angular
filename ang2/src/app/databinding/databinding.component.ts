import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  username = '';
  buttonDisabled = true;
  constructor() { }

  ngOnInit() {
    if( this.username ){
      this.buttonDisabled = false;
    }
  }
  onClear(){
    this.username = '';
    this.buttonDisabled = true;
  }
  onInput(){
    if( !this.username ){
      this.buttonDisabled = true;
    }else{
      this.buttonDisabled = false;
    }
  }
}
