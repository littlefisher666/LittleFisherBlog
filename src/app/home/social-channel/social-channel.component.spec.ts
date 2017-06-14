import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialChannelComponent } from './social-channel.component';

describe('SocialChannelComponent', () => {
  let component: SocialChannelComponent;
  let fixture: ComponentFixture<SocialChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
