import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprimentoComponent } from './comprimento.component';

describe('ComprimentoComponent', () => {
  let component: ComprimentoComponent;
  let fixture: ComponentFixture<ComprimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
