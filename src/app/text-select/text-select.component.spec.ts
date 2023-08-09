import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSelectComponent } from './text-select.component';

describe('TextSelectComponent', () => {
  let component: TextSelectComponent;
  let fixture: ComponentFixture<TextSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
