import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SehirSecimiComponent } from './sehir-secimi.component';

describe('SehirSecimiComponent', () => {
  let component: SehirSecimiComponent;
  let fixture: ComponentFixture<SehirSecimiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SehirSecimiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SehirSecimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
