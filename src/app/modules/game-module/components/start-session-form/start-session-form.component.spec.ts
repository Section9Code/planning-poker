import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSessionFormComponent } from './start-session-form.component';

describe('StartSessionFormComponent', () => {
  let component: StartSessionFormComponent;
  let fixture: ComponentFixture<StartSessionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSessionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
