import { Component, OnInit } from '@angular/core';
import { menuList } from './menu-list';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  sideMenu = menuList;
  collapse = false;
  contentMargin =240;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.collapse = !this.collapse;
    if(!this.collapse){
      this. contentMargin=70;
    }
    else {
      this.contentMargin = 240;
    }
  }

}
