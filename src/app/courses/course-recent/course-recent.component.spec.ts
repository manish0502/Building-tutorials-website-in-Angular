import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRecentComponent } from './course-recent.component';

describe('CourseRecentComponent', () => {
  let component: CourseRecentComponent;
  let fixture: ComponentFixture<CourseRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseRecentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
