import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasesDatos } from './bases-datos';

describe('BasesDatos', () => {
  let component: BasesDatos;
  let fixture: ComponentFixture<BasesDatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasesDatos],
    }).compileComponents();

    fixture = TestBed.createComponent(BasesDatos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
