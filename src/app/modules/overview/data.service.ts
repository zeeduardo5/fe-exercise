import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from 'src/app/models/card';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  cards: Card[] = [];

  getCards(): Observable<Card[]> {
    return new Observable((observer) => {
      if (this.cards.length > 0) {
        observer.next(this.cards);
      } else {
        this.getDataFromApi().subscribe((data: any) => {
          this.cards = [...data.items];
          observer.next(data.items);
        });
      }
    });
  }

  getCardById(id: string): Observable<Card> {
    return new Observable((observer) => {
      if (this.cards.length > 0) {
        observer.next(this.cards.find((card) => card.id === id));
      } else {
        this.getDataFromApi().subscribe((data: any) => {
          this.cards = [...data.items];
          observer.next(this.cards.find((card) => card.id === id));
        });
      }
    });
  }

  updateData(): Observable<Card[]> {
    return new Observable((observer) => {
      this.getDataFromApi().subscribe((data: any) => {
        this.cards = [...data.items];
        observer.next(this.cards);
      });
    });
  }

  private getDataFromApi() {
    return this.http.get(environment.apiUrl);
  }
}
