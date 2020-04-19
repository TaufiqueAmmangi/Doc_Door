import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocServicestComponent } from './doc-servicest.component';

describe('DocServicestComponent', () => {
  let component: DocServicestComponent;
  let fixture: ComponentFixture<DocServicestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocServicestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocServicestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
