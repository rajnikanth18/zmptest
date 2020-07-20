import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  title = 'zmp-onboarding-ui';
  events: string[] = [];
  opened: true;
  boolean = !this.opened;

  ngOnInit(): void {
  }

}
