import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  isActive: boolean = false;
  showMenu: string = '';

  list: string = "Liste";
  itemList: [string];

  newList: string[] = [
    'NEW NEW 1',
    'NEW NEW 1',
    'NEW NEW 1',
    'NEW NEW 1',
    'NEW NEW 1'
  ];

  constructor() {
    this.itemList = [
      'Item1', 'Item2', 'Item3'
    ];
   }

  ngOnInit() {
  }

  eventCalled(){
    this.isActive =  !this.isActive;
  }

  addExpandClass(element: any){
    if(element == this.showMenu){
      this.showMenu = '0';
    }else{
      this.showMenu = element;
    }
  }

}
