import { Component, OnInit } from '@angular/core';
import { ColorItem } from '../models/coloritem';


@Component({
  selector: 'app-flat-colors',
  templateUrl: './flat-colors.component.html',
  styleUrls: ['./flat-colors.component.scss']
})
export class FlatColorsComponent implements OnInit {
  
  title: string = "Flat Colors";
  
  colorArray: ColorItem[] = [
    {name: 'Turquoise	' , color: '#1abc9c'},
    {name: 'Greensea	' , color: '#16a085'},
    {name: 'Emerland	' , color: '#2ecc71'},
    {name: 'Nephritis	' , color: '#27ae60'},
    {name: 'Peterriver	' , color: '#3498db'},
    {name: 'Belizehole	' , color: '#2980b9'},
    {name: 'Amethyst	' , color: '#9b59b6'},
    {name: 'Wisteria	' , color: '#8e44ad'},
    {name: 'Wetasphalt	' , color: '#34495e'},
    {name: 'Midnightblue' , color: '#2c3e50'},
    {name: 'Sunfloser	' , color: '#f1c40f'},
    {name: 'Orange		' , color: '#f39c12'},
    {name: 'Carrot		' , color: '#e67e22'},
    {name: 'Pumpkin		' , color: '#d35400'},
    {name: 'Alizarin	' , color: '#e74c3c'},
    {name: 'Pomegranate	' , color: '#c0392b'},
    {name: 'Clouds		' , color: '#ecf0f1'},
    {name: 'Silver		' , color: '#bdc3c7'},
    {name: 'Asbestos	' , color: '#7f8c8d'},
    {name: 'Concrete	' , color: '#95a5a6'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
