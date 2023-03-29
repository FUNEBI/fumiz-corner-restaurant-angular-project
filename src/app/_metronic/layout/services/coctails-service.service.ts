import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoctailsServiceService {


  constructor(
    private http: HttpClient
  ) { }
  public getAlcoholicCocktails(): Observable<any> {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
    return this.http.get<any>(url);
  }

  public getNonAlcoholicDrink(): Observable<any> {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary%20Drink'
    return this.http.get<any>(url);
  }
  public getOtherDrinks(): Observable<any> {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Other / Unknown'
    return this.http.get<any>(url);
  }
}
