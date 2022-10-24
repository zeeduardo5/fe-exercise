import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Card } from './models/card';
import { FooterItem } from './models/footerItem';
import { HeaderItem } from './models/headetItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sunrise-exercise';
  headerItems: HeaderItem[] = environment.headerItems;
  footerItems: FooterItem[] = environment.footerItems;

  onActivate(e: any) {
    if (e.constructor.name === 'DetailComponent') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }
}
