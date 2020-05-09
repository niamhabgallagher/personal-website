import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  public tab = 'home';

  public tabs = [
    {
      title: 'Home',
      icon: 'home-outline',
      tabName: 'home'
    },
    {
      title: 'About Me',
      icon: 'body-outline',
      tabName: 'about-me'
    },
    {
      title: 'What I Do',
      icon: 'server-outline',
      tabName: 'what-i-do'
    },
    {
      title: 'Education',
      icon: 'book-outline',
      tabName: 'education'
    },
    {
      title: 'Experience',
      icon: 'briefcase-outline',
      tabName: 'experience'
    },
    {
      title: 'Contact',
      icon: 'call-outline',
      tabName: 'contact'
    }
  ];

  constructor() { }

  ngOnInit() {}

  onClickTab(chosenTab) {
    this.tab = chosenTab;
  }


}
