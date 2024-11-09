import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { utlResolver } from './utl.resolver';

describe('utlResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => utlResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
