import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineContactComponent } from './online-contact.component';

describe('OnlineContactComponent', () => {
  let component: OnlineContactComponent;
  let fixture: ComponentFixture<OnlineContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
