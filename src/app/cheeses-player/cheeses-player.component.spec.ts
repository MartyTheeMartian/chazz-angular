import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheesesPlayerComponent } from './cheeses-player.component';

describe('CheesesPlayerComponent', () => {
  let component: CheesesPlayerComponent;
  let fixture: ComponentFixture<CheesesPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheesesPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheesesPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
