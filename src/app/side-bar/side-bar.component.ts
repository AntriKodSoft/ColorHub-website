import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  _active: boolean = false;
  activeItem: number = 0;

  dashBoardList: string[] = [
    'Material Colors',
    'Flat Colors',
    'Social Colors',
    'Metro Colors',
    'HTML Colors',
    'Color Generator'
  ]

  constructor() { }

  ngOnInit() {
  }

  selectedItem(item: number){
    this.activeItem = item;
  };
  
}
