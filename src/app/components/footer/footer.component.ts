import { Component, Input, OnInit } from '@angular/core';
import { FooterItem } from 'src/app/models/footerItem';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() footerItems?: FooterItem[];
  constructor() {}

  ngOnInit(): void {}
}
