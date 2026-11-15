import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contenedores } from './contenedores';

describe('Contenedores', () => {
  let component: Contenedores;
  let fixture: ComponentFixture<Contenedores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contenedores],
    }).compileComponents();

    fixture = TestBed.createComponent(Contenedores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
