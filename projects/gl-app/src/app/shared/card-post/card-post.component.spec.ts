import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostComponent } from './card-post.component';

describe('CardComponent', () => {
  let component: CardPostComponent;
  let fixture: ComponentFixture<CardPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPostComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
