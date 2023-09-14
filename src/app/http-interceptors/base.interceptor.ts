import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
/**
 * 拦截器用途：
 *  1. 使用拦截器在 HTTP 调用中设置请求标头。
 *  2. 通过设置安全令牌来验证 HTTP 调用。
 *  3. 在代码块使用 HTTP 服务调用之前更改响应。
 *  4. 将其用于应用程序中的全局错误处理。
 *  5. 显示每个 HTTP 调用的全局旋转加载器或进度条。
 */

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const newReq = request.clone({
      url: request.url ? ``
    })

    return next.handle(request);
  }
}
