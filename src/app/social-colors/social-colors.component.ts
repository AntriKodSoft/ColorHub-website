import { Component, OnInit } from '@angular/core';
import { ColorItem } from '../models/coloritem';
import { ColorItemX } from '../models/coloritem';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-social-colors',
  templateUrl: './social-colors.component.html',
  styleUrls: ['./social-colors.component.scss'],
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
export class SocialColorsComponent implements OnInit {
  title: string = "Social Colors";
  state: string = 'small';
  
  colorArray: ColorItemX[] = [
	{name: 'Facebook	' , color: '#3b5999', state:'small'},
	{name: 'Skype		' , color: '#00AFF0', state:'small'},
	{name: 'Twitter		' , color: '#55acee', state:'small'}, 
	{name: 'Wordpress	' , color: '#21759b', state:'small'}, 
	{name: 'Linkedin	' , color: '#0077B5', state:'small'}, 
	{name: 'Vimeo		' , color: '#1ab7ea', state:'small'}, 
	{name: 'Tumblr		' , color: '#34465d', state:'small'}, 
	{name: 'VK			' , color: '#4c75a3', state:'small'}, 
	{name: 'Yahoo		' , color: '#410093', state:'small'}, 
	{name: 'Slideshare	' , color: '#0077b5', state:'small'}, 
	{name: 'Instagram	' , color: '#3f729b', state:'small'}, 
	{name: 'Google Plus	' , color: '#dd4b39', state:'small'}, 
	{name: 'Producthunt	' , color: '#da552f', state:'small'}, 
	{name: 'Slack		' , color: '#3aaf85', state:'small'}, 
	{name: 'Hackernews	' , color: '#ff6600', state:'small'}, 
	{name: 'Dribbble	' , color: '#ea4c89', state:'small'}, 
	{name: 'Whatsapp	' , color: '#25D366', state:'small'}, 
	{name: 'Flickr		' , color: '#ff0084', state:'small'}, 
	{name: 'Wechat		' , color: '#09b83e', state:'small'}, 
	{name: 'Foursquare	' , color: '#f94877', state:'small'}, 
	{name: 'Medium		' , color: '#02b875', state:'small'}, 
	{name: 'Vine		' , color: '#00b489', state:'small'}, 
	{name: 'Behance		' , color: '#131418', state:'small'}, 
	{name: 'Snapchat	' , color: '#FFFC00', state:'small'}
];

  constructor() { }

  ngOnInit() {
  }

  animateMe(ind: any) {
    this.colorArray[ind].state = (this.colorArray[ind].state === 'small' ? 'large' : 'small');
    //this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
