import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLabsComponent } from './about-labs.component';

describe('AboutLabsComponent', () => {
  let component: AboutLabsComponent;
  let fixture: ComponentFixture<AboutLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutLabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
