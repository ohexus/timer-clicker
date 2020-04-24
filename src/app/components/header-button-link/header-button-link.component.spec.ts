import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderButtonLinkComponent } from './header-button-link.component';

describe('HeaderButtonLinkComponent', () => {
  let component: HeaderButtonLinkComponent;
  let fixture: ComponentFixture<HeaderButtonLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderButtonLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderButtonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
