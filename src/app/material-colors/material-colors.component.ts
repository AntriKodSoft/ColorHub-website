import { Component, OnInit } from '@angular/core';

import { ColorItem } from '../models/coloritem';
@Component({
  selector: 'app-material-colors',
  templateUrl: './material-colors.component.html',
  styleUrls: ['./material-colors.component.scss']
})
export class MaterialColorsComponent implements OnInit {

  clr: ColorItem = {
    name: 'BlueX',
    color: '#FF00F0'
  };

  colorArray: ColorItem[] = [
    {name: '' , color: 'f44336'},
    {name: '' , color: 'E91E63'},
    {name: '' , color: '9C27B0'},
    {name: '' , color: '3F51B5'},
    {name: '' , color: '2196F3'},
    {name: '' , color: '009688'},

  ];


  colorListItems: string[] = [
    'Blue', 'Cyan', 'Red', 'Black', 'Magnetia'
  ];
  constructor() { }

  ngOnInit() {
  }

}
