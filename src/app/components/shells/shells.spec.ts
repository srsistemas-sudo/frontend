import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shells } from './shells';

describe('Shells', () => {
  let component: Shells;
  let fixture: ComponentFixture<Shells>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shells]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shells);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
