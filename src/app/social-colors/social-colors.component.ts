import { Component, OnInit } from '@angular/core';

import { ColorItem } from '../models/coloritem';

@Component({
  selector: 'app-social-colors',
  templateUrl: './social-colors.component.html',
  styleUrls: ['./social-colors.component.scss']
})
export class SocialColorsComponent implements OnInit {
  title: string = "Social Colors";
  
  colorArray: ColorItem[] = [
		{name: 'Facebook	' , color: '#3b5999'},
		{name: 'Skype		' , color: '#00AFF0'},
		{name: 'Twitter		' , color: '#55acee'}, 
		{name: 'Wordpress	' , color: '#21759b'}, 
		{name: 'Linkedin	' , color: '#0077B5'}, 
		{name: 'Vimeo		' , color: '#1ab7ea'}, 
		{name: 'Tumblr		' , color: '#34465d'}, 
		{name: 'VK			' , color: '#4c75a3'}, 
		{name: 'Yahoo		' , color: '#410093'}, 
		{name: 'Slideshare	' , color: '#0077b5'}, 
		{name: 'Instagram	' , color: '#3f729b'}, 
		{name: 'Google Plus	' , color: '#dd4b39'}, 
		{name: 'Producthunt	' , color: '#da552f'}, 
		{name: 'Slack		' , color: '#3aaf85'}, 
		{name: 'Hackernews	' , color: '#ff6600'}, 
		{name: 'Dribbble	' , color: '#ea4c89'}, 
		{name: 'Whatsapp	' , color: '#25D366'}, 
		{name: 'Flickr		' , color: '#ff0084'}, 
		{name: 'Wechat		' , color: '#09b83e'}, 
		{name: 'Foursquare	' , color: '#f94877'}, 
		{name: 'Medium		' , color: '#02b875'}, 
		{name: 'Vine		' , color: '#00b489'}, 
		{name: 'Behance		' , color: '#131418'}, 
		{name: 'Snapchat	' , color: '#FFFC00'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
