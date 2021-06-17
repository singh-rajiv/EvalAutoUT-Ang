import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(() => {
    const heroServiceStub = () => ({
      getHeroes: () => ({ subscribe: f => f({}) }),
      addHero: hero => ({ subscribe: f => f({}) }),
      deleteHero: id => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HeroesComponent],
      providers: [{ provide: HeroService, useFactory: heroServiceStub }]
    });
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`heroes has default value`, () => {
    expect(component.heroes).toEqual([]);
  });

  describe('delete', () => {
    it('makes expected calls', () => {
      const heroStub: Hero = <any>{};
      const heroServiceStub: HeroService = fixture.debugElement.injector.get(
        HeroService
      );
      spyOn(heroServiceStub, 'deleteHero').and.callThrough();
      component.delete(heroStub);
      expect(heroServiceStub.deleteHero).toHaveBeenCalled();
    });
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
