import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-custom-user-alert]',
  templateUrl: './custom-user-alert.component.html',
  styleUrls: ['./custom-user-alert.component.css']
})
export class CustomUserAlertComponent implements OnInit {

  userInputText:string = '';

  onBtnClick = function onBtnClick() : void {
    alert(this.userInputText);
  };

  onClear = function onClear() : void {
    this.userInputText = ' ';
  };

  constructor() { }

  ngOnInit() {
  }

}
