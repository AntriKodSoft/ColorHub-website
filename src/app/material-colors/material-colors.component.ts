import { Component, OnInit } from '@angular/core';

import { ColorItem, ColorRadioItem, ColorItemX } from '../models/coloritem';
import { matColorList } from '../models/materialcolors';
import { ClipboardModule } from 'ngx-clipboard';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-material-colors',
  templateUrl: './material-colors.component.html',
  styleUrls: ['./material-colors.component.scss'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
          transform: 'scale(1)',
      })),
      state('large', style({
          transform: 'scale(1)',
      })),
      /*
      transition('small <=> large', animate(1000, keyframes([
        style({opacity: 0, transform: 'perspective(800px) rotateX(-90deg);', offset: 0.0}),
        style({opacity: 1, transform: 'perspective(800px) rotateX(50deg);', offset: 0.5}),
        style({opacity: 1, transform: 'perspective(800px) rotateX(0deg);', offset: 1.0})
      ]))),
      */
       // we can use it  origin:'50% 0%;'
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 1, transform: 'translateY(35px)',  offset: 0.0}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ]))),
  ]),
  ]
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

  listItem: ColorItemX[];

  constructor() { }

  ngOnInit() {
    this.listItem = matColorList[0].item;
  }

  clickMe(): any{
    console.log('Clicked Me');
  }

  mouseUp(ind: number): any{
    console.log('Over Here');
  }

  animateMe(ind: any) {
    this.listItem[ind].state = (this.listItem[ind].state === 'small' ? 'large' : 'small');
    //this.state = (this.state === 'small' ? 'large' : 'small');
  }

  clickRadio(ind:any){
    this.listItem = matColorList[ind].item;
  }

}
