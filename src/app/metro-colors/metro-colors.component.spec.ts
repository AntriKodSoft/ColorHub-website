import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroColorsComponent } from './metro-colors.component';

describe('MetroColorsComponent', () => {
  let component: MetroColorsComponent;
  let fixture: ComponentFixture<MetroColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetroColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetroColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
