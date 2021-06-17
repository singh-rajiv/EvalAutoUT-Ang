import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeroService } from '../hero.service';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    const heroServiceStub = () => ({
      getHeroes: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DashboardComponent],
      providers: [{ provide: HeroService, useFactory: heroServiceStub }]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`heroes has default value`, () => {
    expect(component.heroes).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getHeroes').and.callThrough();
      component.ngOnInit();
      expect(component.getHeroes).toHaveBeenCalled();
    });
  });

  describe('getHeroes', () => {
    it('makes expected calls', () => {
      const heroServiceStub: HeroService = fixture.debugElement.injector.get(
        HeroService
      );
      spyOn(heroServiceStub, 'getHeroes').and.callThrough();
      component.getHeroes();
      expect(heroServiceStub.getHeroes).toHaveBeenCalled();
    });
  });
});
