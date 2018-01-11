import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatColorsComponent } from './flat-colors.component';

describe('FlatColorsComponent', () => {
  let component: FlatColorsComponent;
  let fixture: ComponentFixture<FlatColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
