import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zmp-onboarding-ui';
  events: string[] = [];
  opened: true;
  boolean = !this.opened;
}
