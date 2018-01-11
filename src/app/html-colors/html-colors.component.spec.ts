import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlColorsComponent } from './html-colors.component';

describe('HtmlColorsComponent', () => {
  let component: HtmlColorsComponent;
  let fixture: ComponentFixture<HtmlColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
