import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellsProducto } from './shells-producto';

describe('ShellsProducto', () => {
  let component: ShellsProducto;
  let fixture: ComponentFixture<ShellsProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellsProducto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellsProducto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
