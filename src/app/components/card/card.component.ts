import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Output() clickCardEvent = new EventEmitter<string>();
  @Input() card: Card | undefined;
  constructor() {}

  ngOnInit(): void {}

  clickCard(): void {
    if (this.card) this.clickCardEvent.emit(this.card.id);
  }
}
