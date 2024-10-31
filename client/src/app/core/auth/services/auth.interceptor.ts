import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const chave = this.localStorageService.obterTokenAutenticacao()?.chave;

    if (chave) {
      const requisicaoClonada = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${chave}`),
      });

      return next.handle(requisicaoClonada);
    }

    return next.handle(req);
  }
}
