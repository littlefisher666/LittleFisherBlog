import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDescComponent } from './author-desc.component';

describe('AuthorDescComponent', () => {
  let component: AuthorDescComponent;
  let fixture: ComponentFixture<AuthorDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
