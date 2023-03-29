import { Component,OnInit  } from '@angular/core';
import { UtilityService } from '../services/utilityService/utilitiesService';
import { MealsServiceService } from '../services/meals/meals-service.service';
@Component({
  selector: 'app-inter',
  templateUrl: './inter.component.html',
  styleUrls: ['./inter.component.css']
})
export class InterComponent implements OnInit{
  mealCategories:any;

  constructor(
    private MealsService:MealsServiceService,
    private AlertService:UtilityService
  ) {
    
  }

  ngOnInit(): void {
    this.getMealsCategory()
  }

  getMealsCategory(){
    this.AlertService.ShowSpinner()
    this.MealsService.getMeals().subscribe((data:any)=>{
      console.log(data)
      this.mealCategories = data.categories
      this.AlertService.HideSpinner()
    })
    
  }
}
