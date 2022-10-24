import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap, Observable, of } from 'rxjs';
import { Card } from 'src/app/models/card';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  items$?: Observable<Card[]>;
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.items$ = this.dataService.getCards();
  }

  click(id: any): void {
    this.router.navigate(['overview/detail/' + id]);
  }

  update(): void {
    this.items$ = this.dataService.updateData();
  }
}
