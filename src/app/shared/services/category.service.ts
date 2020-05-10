import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly serverUrl = 'http://localhost:8080';
  private readonly apiUrl = `${this.serverUrl}/api/categories`;

  constructor(private readonly http: HttpClient) {}

  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category);
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  public removeCategory(category: Category): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${category.id}`);
  }
}
