import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeroService } from '../hero.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroSearchComponent } from './hero-search.component';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(() => {
    const heroServiceStub = () => ({ searchHeroes: term => ({}) });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HeroSearchComponent],
      providers: [{ provide: HeroService, useFactory: heroServiceStub }]
    });
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const heroServiceStub: HeroService = fixture.debugElement.injector.get(
        HeroService
      );
      spyOn(heroServiceStub, 'searchHeroes').and.callThrough();
      component.ngOnInit();
      expect(heroServiceStub.searchHeroes).toHaveBeenCalled();
    });
  });
});
