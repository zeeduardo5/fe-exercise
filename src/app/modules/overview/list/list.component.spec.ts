import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Card } from 'src/app/models/card';
import { DataService } from '../data.service';

import { ListComponent } from './list.component';

function cardMock(key: string): Card {
  return {
    id: key,
    avatar: 'test',
    type: 'type_' + key,
    name: 'test' + key,
  };
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  const dataServiceSpy = jasmine.createSpyObj('DataService', ['getCards', 'updateData']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: DataService,
          useValue: dataServiceSpy,
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    dataServiceSpy.getCards.and.returnValue(
      of([cardMock('1'), cardMock('2')])
    );
    dataServiceSpy.updateData.and.returnValue(
      of([cardMock('1'), cardMock('3')])
    );
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get the list', () => {
    let cards: Card[]= [];
    expect(component.items$).toBeDefined();
    component.items$?.subscribe(c=> {cards = c});
    expect(cards.length).toBeDefined();
  });

  it('should refresh the list', () => {
    let cards: Card[]= [];
    component.items$?.subscribe(c=> {cards = c});
    expect(cards[1].id).toBe('2');
    component.update();
    component.items$?.subscribe(c=> {cards = c});
    expect(cards[1].id).toBe('3');
  });
});
