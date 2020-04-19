import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopedicComponent } from './orthopedic.component';

describe('OrthopedicComponent', () => {
  let component: OrthopedicComponent;
  let fixture: ComponentFixture<OrthopedicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopedicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
