import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //add authorization header with jwt token if available
        request = request.clone({
            setHeaders: {
                Accept: 'application/json',
                'Access-Control-Allow-Origin':'*',
            },
        });
        return next.handle(request);
    }
}