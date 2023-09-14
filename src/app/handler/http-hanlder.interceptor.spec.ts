import { TestBed } from '@angular/core/testing';

import { HttpHanlderInterceptor } from './http-hanlder.interceptor';

describe('HttpHanlderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpHanlderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpHanlderInterceptor = TestBed.inject(HttpHanlderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
