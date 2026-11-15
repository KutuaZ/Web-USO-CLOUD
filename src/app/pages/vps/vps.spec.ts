import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Vps } from './vps';

describe('Vps', () => {
  let component: Vps;
  let fixture: ComponentFixture<Vps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vps],
    }).compileComponents();

    fixture = TestBed.createComponent(Vps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
