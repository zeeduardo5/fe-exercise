import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Card } from 'src/app/models/card';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  card?: Card;
  id: string = '';
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((paramsObj) => {
          this.id = paramsObj['id'];
          return this.dataService.getCardById(this.id);
        })
      )
      .subscribe((res: any) => {
        this.card = res;
      });
  }
}
