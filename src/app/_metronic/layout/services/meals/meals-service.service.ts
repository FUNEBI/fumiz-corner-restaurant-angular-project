import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsServiceService {

  constructor(
    private http: HttpClient
  ) { }

  public getMeals(): Observable<any> {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    
    return this.http.get<any>(url);
  }

  getMealsByCategory(id: string): Observable<any> {
    const url=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
    return this.http.get<any>(url)
        
}
}
