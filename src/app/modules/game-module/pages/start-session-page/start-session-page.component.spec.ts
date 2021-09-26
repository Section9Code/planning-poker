import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSessionPageComponent } from './start-session-page.component';

describe('StartSessionPageComponent', () => {
  let component: StartSessionPageComponent;
  let fixture: ComponentFixture<StartSessionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSessionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSessionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
