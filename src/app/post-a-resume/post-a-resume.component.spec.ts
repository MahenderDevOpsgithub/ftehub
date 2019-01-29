import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAResumeComponent } from './post-a-resume.component';

describe('PostAResumeComponent', () => {
  let component: PostAResumeComponent;
  let fixture: ComponentFixture<PostAResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
