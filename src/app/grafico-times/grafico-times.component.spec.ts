import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoTimesComponent } from './grafico-times.component';

describe('GraficoTimesComponent', () => {
  let component: GraficoTimesComponent;
  let fixture: ComponentFixture<GraficoTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
