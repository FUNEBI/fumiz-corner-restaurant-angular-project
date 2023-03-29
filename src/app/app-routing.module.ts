import { HomepageComponent } from './_metronic/layout/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CocktailsComponent } from './_metronic/layout/cocktails/cocktails.component';
import { AppDefaultComponent } from './_metronic/layout/app-default/app-default.component';
import { NavbarComponent } from './_metronic/layout/navbar/navbar.component';
import { InterComponent } from './_metronic/layout/inter/inter.component';
import { NonAlcoholicComponent } from './_metronic/layout/non-alcoholic/non-alcoholic.component';
import { MealCategoryComponent } from './_metronic/layout/meal-category/meal-category.component';
import { OurServicesComponent } from './_metronic/layout/our-services/our-services.component';

const routes: Routes = [
     {path: '', component:HomepageComponent},
     {path: 'meal-categories', component:InterComponent},
     {path: 'about-us', component:OurServicesComponent},
     {path: 'meal-category/:id', component:MealCategoryComponent},
     {path: 'cocktails', component:CocktailsComponent},
     {path: 'non-alcoholic-drinks', component:NonAlcoholicComponent},
   ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
