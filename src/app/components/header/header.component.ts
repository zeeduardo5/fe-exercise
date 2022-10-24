import { Component, Input, OnInit } from '@angular/core';
import { HeaderItem } from 'src/app/models/headetItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headerItems?: HeaderItem [];
  isCollapsed: boolean = true;
  constructor() {}

  ngOnInit(): void {
  }
}
