import { Component, OnInit } from '@angular/core';
import { ColorItem } from '../models/coloritem';
import { ColorItemX } from '../models/coloritem';
import { ClipboardModule } from 'ngx-clipboard';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-flat-colors',
  templateUrl: './flat-colors.component.html',
  styleUrls: ['./flat-colors.component.scss'],
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
export class FlatColorsComponent implements OnInit {
  
  title: string = "Flat Colors";
  
  colorArray: ColorItemX[] = [
    {name: 'Turquoise	' , color: '#1abc9c' , state:'small'},
    {name: 'Greensea	' , color: '#16a085' , state:'small'},
    {name: 'Emerland	' , color: '#2ecc71' , state:'small'},
    {name: 'Nephritis	' , color: '#27ae60' , state:'small'},
    {name: 'Peterriver	' , color: '#3498db' , state:'small'},
    {name: 'Belizehole	' , color: '#2980b9' , state:'small'},
    {name: 'Amethyst	' , color: '#9b59b6' , state:'small'},
    {name: 'Wisteria	' , color: '#8e44ad' , state:'small'},
    {name: 'Wetasphalt	' , color: '#34495e' , state:'small'},
    {name: 'Midnightblue' , color: '#2c3e50' , state:'small'},
    {name: 'Sunfloser	' , color: '#f1c40f' , state:'small'},
    {name: 'Orange		' , color: '#f39c12' , state:'small'},
    {name: 'Carrot		' , color: '#e67e22' , state:'small'},
    {name: 'Pumpkin		' , color: '#d35400' , state:'small'},
    {name: 'Alizarin	' , color: '#e74c3c' , state:'small'},
    {name: 'Pomegranate	' , color: '#c0392b' , state:'small'},
    {name: 'Clouds		' , color: '#ecf0f1' , state:'small'},
    {name: 'Silver		' , color: '#bdc3c7' , state:'small'},
    {name: 'Asbestos	' , color: '#7f8c8d' , state:'small'},
    {name: 'Concrete	' , color: '#95a5a6' , state:'small'}
  ];

  state: string = 'small';
  
  
  constructor() { }

  ngOnInit() {
  }

  animateMe(ind: any) {
    this.colorArray[ind].state = (this.colorArray[ind].state === 'small' ? 'large' : 'small');
    //this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
