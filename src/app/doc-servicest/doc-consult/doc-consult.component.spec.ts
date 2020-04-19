import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocConsultComponent } from './doc-consult.component';

describe('DocConsultComponent', () => {
  let component: DocConsultComponent;
  let fixture: ComponentFixture<DocConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
