import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageapiComponent } from './imageapi.component';

describe('ImageapiComponent', () => {
  let component: ImageapiComponent;
  let fixture: ComponentFixture<ImageapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
