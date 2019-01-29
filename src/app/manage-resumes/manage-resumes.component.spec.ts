import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResumesComponent } from './manage-resumes.component';

describe('ManageResumesComponent', () => {
  let component: ManageResumesComponent;
  let fixture: ComponentFixture<ManageResumesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageResumesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageResumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
