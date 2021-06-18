import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TemplateRef } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { UnlessDirective } from './unless.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <div appUnless>Default</div>
  `
})
class TestComponent {}

describe('UnlessDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;

  beforeEach(() => {
    const templateRefStub = () => ({});
    const viewContainerRefStub = () => ({});
    TestBed.configureTestingModule({
      declarations: [UnlessDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(
      By.directive(UnlessDirective)
    );
    bareElement = fixture.debugElement.query(By.css(':not([appUnless])'));
  });

  it('should have bare element', () => {
    expect(bareElement).toBeTruthy();
  });

  it('should have 1 element(s) with directive', () => {
    expect(elementsWithDirective.length).toBe(1);
  });
});
