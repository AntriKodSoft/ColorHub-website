import { Component, OnInit } from '@angular/core';
import { ColorItem } from '../models/coloritem';
import { ColorItemX } from '../models/coloritem';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-metro-colors',
  templateUrl: './metro-colors.component.html',
  styleUrls: ['./metro-colors.component.scss'],
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
export class MetroColorsComponent implements OnInit {

  title: string = "Metro Colors";
  state: string = 'small';
  
  colorArray: ColorItemX[] = [
    {name: 'Lime	' , color: '#a4c400', state:'small'},
    {name: 'Green	' , color: '#60a917', state:'small'},
    {name: 'Emerald	' , color: '#008a00', state:'small'},
    {name: 'Teal	' , color: '#00aba9', state:'small'},
    {name: 'Cyan	' , color: '#1ba1e2', state:'small'},
    {name: 'Cobalt	' , color: '#0050ef', state:'small'},
    {name: 'Indigo	' , color: '#6a00ff', state:'small'},
    {name: 'Violet	' , color: '#aa00ff', state:'small'},
    {name: 'Pink	' , color: '#f472d0', state:'small'},
    {name: 'Magenta	' , color: '#d80073', state:'small'},
    {name: 'Crimson	' , color: '#a20025', state:'small'},
    {name: 'Red		' , color: '#e51400', state:'small'},
    {name: 'Orange	' , color: '#fa6800', state:'small'},
    {name: 'Amber	' , color: '#f0a30a', state:'small'},
    {name: 'Yellow	' , color: '#e3c800', state:'small'},
    {name: 'Brown	' , color: '#825a2c', state:'small'},
    {name: 'Olive	' , color: '#6d8764', state:'small'},
    {name: 'Steel	' , color: '#647687', state:'small'},
    {name: 'Mauve	' , color: '#76608a', state:'small'},
    {name: 'Sienna	' , color: '#a0522d', state:'small'}
  ];


  constructor() { }

  ngOnInit() {
  }

  animateMe(ind: any) {
    this.colorArray[ind].state = (this.colorArray[ind].state === 'small' ? 'large' : 'small');
    //this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
