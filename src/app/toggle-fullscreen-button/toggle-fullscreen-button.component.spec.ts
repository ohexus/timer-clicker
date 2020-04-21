import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFullscreenButtonComponent } from './toggle-fullscreen-button.component';

describe('ToggleFullscreenButtonComponent', () => {
  let component: ToggleFullscreenButtonComponent;
  let fixture: ComponentFixture<ToggleFullscreenButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleFullscreenButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleFullscreenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
