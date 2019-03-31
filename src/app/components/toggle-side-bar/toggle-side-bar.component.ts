import {Component, Input, OnInit} from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-toggle-side-bar',
  templateUrl: './toggle-side-bar.component.html',
  styleUrls: ['./toggle-side-bar.component.scss']
})
export class ToggleSideBarComponent implements OnInit {
  @Input() sideBar: SideBarComponent;

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.sideBar.toggle();
  }
}
