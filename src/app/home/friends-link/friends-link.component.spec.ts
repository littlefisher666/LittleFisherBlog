import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsLinkComponent } from './friends-link.component';

describe('FriendsLinkComponent', () => {
  let component: FriendsLinkComponent;
  let fixture: ComponentFixture<FriendsLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
