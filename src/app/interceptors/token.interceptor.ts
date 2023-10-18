import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../pages/services/storage.service';
import { TOKEN } from '../pages/services/auth.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    private storageService = inject(StorageService)
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.storageService.getItem(TOKEN) // Reemplaza esto con la lógica para obtener el token del usuario
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}