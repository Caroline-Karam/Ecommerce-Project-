import { HttpInterceptorFn } from '@angular/common/http';

export const apphttpInterceptor: HttpInterceptorFn = (req, next) => {
  if (localStorage.getItem('_token') !== null) {
    const appToken: any = localStorage.getItem('_token');
    req = req.clone({
      setHeaders: {
        token: appToken,
      },
    });
  }
  return next(req);
};
