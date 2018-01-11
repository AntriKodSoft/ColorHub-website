import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialColorsComponent } from './social-colors.component';

describe('SocialColorsComponent', () => {
  let component: SocialColorsComponent;
  let fixture: ComponentFixture<SocialColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
