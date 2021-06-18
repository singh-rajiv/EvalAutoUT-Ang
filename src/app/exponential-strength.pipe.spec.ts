import { TestBed } from '@angular/core/testing';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

describe('ExponentialStrengthPipe', () => {
  let pipe: ExponentialStrengthPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ExponentialStrengthPipe] });
    pipe = TestBed.inject(ExponentialStrengthPipe);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms X to Y', () => {
    const value: any = 'X';
    const args: string[] = [];
    expect(pipe.transform(value, args)).toEqual('Y');
  });
});
