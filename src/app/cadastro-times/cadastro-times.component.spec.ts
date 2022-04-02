import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTimesComponent } from './cadastro-times.component';

describe('CadastroTimesComponent', () => {
  let component: CadastroTimesComponent;
  let fixture: ComponentFixture<CadastroTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
