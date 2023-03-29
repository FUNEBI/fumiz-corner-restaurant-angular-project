import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UtilityService } from '../services/utilityService/utilitiesService';
import { MealsServiceService } from '../services/meals/meals-service.service';

@Component({
  selector: 'app-meal-category',
  templateUrl: './meal-category.component.html',
  styleUrls: ['./meal-category.component.css']
})
export class MealCategoryComponent implements OnInit{

  foodCategory:any;
  mealList:any

  constructor(
    private MealsService:MealsServiceService,
    private activeRoute: ActivatedRoute,
    private AlertService:UtilityService
  ) {
    
  }
  ngOnInit(): void {
    const id = 'id';
    if (this.activeRoute.snapshot.params[id])
    {
      this.foodCategory = this.activeRoute.snapshot.params[id];
      console.log("id" + this.foodCategory)
    }
    this.getMealsByCategory(this.foodCategory)
  }

  getMealsByCategory(id:any){
    this.AlertService.ShowSpinner()
    this.MealsService.getMealsByCategory(id).subscribe((data:any)=>{
      console.log(data)
      this.mealList = data.meals
      this.AlertService.HideSpinner()
    })
  }
}
