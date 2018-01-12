import { Component, OnInit } from '@angular/core';

import { ColorItem } from '../models/coloritem';

@Component({
  selector: 'app-metro-colors',
  templateUrl: './metro-colors.component.html',
  styleUrls: ['./metro-colors.component.scss']
})
export class MetroColorsComponent implements OnInit {

  title: string = "Metro Colors";
  
  colorArray: ColorItem[] = [
    {name: 'Lime	' , color: '#a4c400'},
    {name: 'Green	' , color: '#60a917'},
    {name: 'Emerald	' , color: '#008a00'},
    {name: 'Teal	' , color: '#00aba9'},
    {name: 'Cyan	' , color: '#1ba1e2'},
    {name: 'Cobalt	' , color: '#0050ef'},
    {name: 'Indigo	' , color: '#6a00ff'},
    {name: 'Violet	' , color: '#aa00ff'},
    {name: 'Pink	' , color: '#f472d0'},
    {name: 'Magenta	' , color: '#d80073'},
    {name: 'Crimson	' , color: '#a20025'},
    {name: 'Red		' , color: '#e51400'},
    {name: 'Orange	' , color: '#fa6800'},
    {name: 'Amber	' , color: '#f0a30a'},
    {name: 'Yellow	' , color: '#e3c800'},
    {name: 'Brown	' , color: '#825a2c'},
    {name: 'Olive	' , color: '#6d8764'},
    {name: 'Steel	' , color: '#647687'},
    {name: 'Mauve	' , color: '#76608a'},
    {name: 'Sienna	' , color: '#a0522d'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
