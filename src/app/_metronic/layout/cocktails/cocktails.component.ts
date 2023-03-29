import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utilityService/utilitiesService';
import { CoctailsServiceService } from '../services/coctails-service.service';
import { MealsServiceService } from '../services/meals/meals-service.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  alcoholicDrinks:any;
  nonAlcoholicDrinks:any;

  constructor(
    private CoctailsService:CoctailsServiceService,
    private MealsServiceService:MealsServiceService,
    private AlertService:UtilityService
  ) {
    
  }
  ngOnInit(): void {
    this.getDrinks()
  }
  getDrinks(){
    this.AlertService.ShowSpinner()
    this.CoctailsService.getAlcoholicCocktails().subscribe((data:any)=>{
      console.log(data)
      this.alcoholicDrinks=data.drinks
      this.AlertService.HideSpinner()
    })
  }
  
}
