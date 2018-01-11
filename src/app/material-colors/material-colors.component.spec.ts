import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialColorsComponent } from './material-colors.component';

describe('MaterialColorsComponent', () => {
  let component: MaterialColorsComponent;
  let fixture: ComponentFixture<MaterialColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
