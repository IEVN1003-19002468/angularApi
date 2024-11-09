import { ResolveFn } from '@angular/router';

export const utlResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
