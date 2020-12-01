import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDeVComponent } from './web-de-v.component';

describe('WebDeVComponent', () => {
  let component: WebDeVComponent;
  let fixture: ComponentFixture<WebDeVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDeVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDeVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
