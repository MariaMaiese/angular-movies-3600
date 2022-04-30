import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: any[] = [
    {
      url: 'home',
      text: 'Películas',
      icon: 'bi-film'
    },
    {
      url: 'contact',
      text: 'Gifs',
      icon: 'bi-emoji-smile-upside-down'
    },
    {
      url: 'about',
      text: 'About',
      icon: 'bi-umbrella'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
