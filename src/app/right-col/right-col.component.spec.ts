import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightColComponent } from './right-col.component';

describe('RightColComponent', () => {
  let component: RightColComponent;
  let fixture: ComponentFixture<RightColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
