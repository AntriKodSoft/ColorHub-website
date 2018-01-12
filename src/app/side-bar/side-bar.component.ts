import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../models/menuitems';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  _active: boolean = false;
  activeItem: number = 0;

  menuItems: MenuItems[] =  [
    {name: 'Material Colors', route : 'materialcolors'},
    {name: 'Flat Colors', route : 'flatcolors'},
    {name: 'Social Colors', route : 'socialcolors'},
    {name: 'Metro Colors', route : 'metrocolors'},
    {name: 'HTML Colors', route : 'htmlcolors'},
    {name: 'Color Generator', route : ''},
  ]
  
  constructor() { }

  ngOnInit() {
  }

  selectedItem(item: number){
    this.activeItem = item;
  };
  
}
