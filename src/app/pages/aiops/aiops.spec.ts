import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aiops } from './aiops';

describe('Aiops', () => {
  let component: Aiops;
  let fixture: ComponentFixture<Aiops>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aiops],
    }).compileComponents();

    fixture = TestBed.createComponent(Aiops);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
