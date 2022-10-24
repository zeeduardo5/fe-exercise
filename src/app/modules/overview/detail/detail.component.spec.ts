import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { Card } from 'src/app/models/card';
import { DataService } from '../data.service';

import { DetailComponent } from './detail.component';

function cardMock(key: string): Card {
  return {
    id: key,
    avatar: 'test',
    type: 'type_' + key,
    name: 'test' + key,
  };
}

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  const dataServiceSpy = jasmine.createSpyObj('DataService', ['getCardById']);
  beforeEach(async () => {
  
    await TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      imports: [],
      providers: [
        {
          provide: DataService,
          useValue: dataServiceSpy,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({'id': '1'}),
            snapshot: new ActivatedRouteSnapshot(),
          },
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    dataServiceSpy.getCardById.and.returnValue(
      of(cardMock('1'))
    );
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get card', () => {
    expect(component.card?.id).toBe('1');
  });
});
