import { Component, OnInit } from '@angular/core';

import { ColorItem, ColorRadioItem } from '../models/coloritem';
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


  matColorButtons: ColorRadioItem[] = [
    {name: 'Red         ' , color: '#f44336', isChecked: false },
    {name: 'Pink        ' , color: '#E91E63', isChecked: false },
    {name: 'Purple      ' , color: '#9C27B0', isChecked: false },
    {name: 'Deep Purple ' , color: '#673AB7', isChecked: false },
    {name: 'Indigo      ' , color: '#3F51B5', isChecked: false },
    {name: 'Blue	    ' , color: '#2196F3', isChecked: false },
    {name: 'Light Blue	' , color: '#03A9F4', isChecked: false },
    {name: 'Cyan		' , color: '#00BCD4', isChecked: false },
    {name: 'Teal		' , color: '#009688', isChecked: false },
    {name: 'Green		' , color: '#4CAF50', isChecked: false },
    {name: 'Light Green	' , color: '#8BC34A', isChecked: false },
    {name: 'Lime		' , color: '#CDDC39', isChecked: false },
    {name: 'Yellow		' , color: '#FFEB3B', isChecked: false },
    {name: 'Amber		' , color: '#FFC107', isChecked: false },
    {name: 'Orange		' , color: '#FF9800', isChecked: false },
    {name: 'Deep Orange	' , color: '#FF5722', isChecked: false },
    {name: 'Brown		' , color: '#795548', isChecked: false },
    {name: 'Grey		' , color: '#9E9E9E', isChecked: false },
    {name: 'Blue Grey	' , color: '#607D8B', isChecked: false }
  ];

  colorListItems: string[] = [
    'Blue', 'Cyan', 'Red', 'Black', 'Magnetia'
  ];

  colorButton: string[] = [
    '#ff00ff',
    '#f0f0f0',
    '#fff0f0'
  ];

  constructor() { }

  ngOnInit() {
  }

  clickMe(): any{
    console.log('Clicked Me');
  }

  mouseUp(ind: number): any{
    console.log('Over Here');
  }

}
