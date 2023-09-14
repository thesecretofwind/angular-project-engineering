import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse, ListDto, Product } from 'app/models';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProductList(): Observable<ListDto<Product>> {
    return this.http.get<ListDto<Product>>('/Product?pi=1&ps=10')
  }

  public getProductInfo(): Observable<Product> {
    return this.http.get<Product>('/Product')
  }

  public addProduct(data: Product): Observable<HttpResponse<void>> {
    return this.http.put<HttpResponse<void>>('/Product',data)
                    .pipe(shareReplay())
  }
}
