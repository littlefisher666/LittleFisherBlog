import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTagsComponent } from './post-tags.component';

describe('PostTagsComponent', () => {
  let component: PostTagsComponent;
  let fixture: ComponentFixture<PostTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
