import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDisplayComponent } from './name-display.component';

describe('NameDisplayComponent', () => {
  let component: NameDisplayComponent;
  let fixture: ComponentFixture<NameDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
