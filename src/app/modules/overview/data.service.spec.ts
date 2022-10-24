import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Card } from 'src/app/models/card';

import { DataService } from './data.service';

function cardMock(key: string): Card {
  return {
    id: key,
    avatar: 'test',
    type: 'type_' + key,
    name: 'test' + key,
  };
}
describe('DataService', () => {
  let service: DataService;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientSpy,
        },
      ],
    });
    service = TestBed.inject(DataService);
  });
  beforeEach(() => {
    httpClientSpy.get.and.returnValue(
      of({ items: [cardMock('1'), cardMock('2')] })
    );
  });

  it('should fetch data', () => {
    let cards: Card[] | undefined;
    service.getCards().subscribe((c) => (cards = c));
    expect(cards?.length).toEqual(2);
  });

  it('should fetch card by iD', () => {
    let card: Card | undefined;
    service.getCards().subscribe();
    service.getCardById('1').subscribe((c) => (card = c));
    expect(card?.name).toEqual('test1');
  });
});
