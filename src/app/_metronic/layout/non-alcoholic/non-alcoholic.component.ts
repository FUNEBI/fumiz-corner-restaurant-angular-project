import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utilityService/utilitiesService';
import { CoctailsServiceService } from '../services/coctails-service.service';
import { NigerianRecipesService } from '../services/nigerian-recipes/nigerian-recipes.service';

@Component({
  selector: 'app-non-alcoholic',
  templateUrl: './non-alcoholic.component.html',
  styleUrls: ['./non-alcoholic.component.css']
})
export class NonAlcoholicComponent implements OnInit {

  nonAlcoholicDrinks:any;
  otherDrinks:any

  constructor(
    private CoctailsService:CoctailsServiceService,
    private NigerianRecipesService:NigerianRecipesService,
    private AlertService:UtilityService
  ) {
    
  }

  ngOnInit(): void {
    this.getNonAlcDrinks()
    this.getOtherDrinks()
  }

  getNonAlcDrinks(){
    this.CoctailsService.getNonAlcoholicDrink().subscribe((data:any)=>{
      console.log(data)
      this.nonAlcoholicDrinks = data.drinks
    })
  }

  getOtherDrinks(){
    this.AlertService.ShowSpinner()
    this.CoctailsService.getOtherDrinks().subscribe((data:any)=>{
      console.log(data)
      this.otherDrinks = data.drinks
      this.AlertService.HideSpinner()
    })
  }
  
}
