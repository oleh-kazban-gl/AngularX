import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectionComponent } from './card-projection.component';

describe('CardProjectionComponent', () => {
  let component: CardProjectionComponent;
  let fixture: ComponentFixture<CardProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
