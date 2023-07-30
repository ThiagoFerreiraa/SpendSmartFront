import { Component } from '@angular/core';
import { navSideData } from './nav-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  collapsed = false;
  navData = navSideData;
}
