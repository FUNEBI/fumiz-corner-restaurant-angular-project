import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NonAlcoholicComponent } from './_metronic/layout/non-alcoholic/non-alcoholic.component';
import { AppComponent } from './app.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './_metronic/layout/navbar/navbar.component';
import { HomepageComponent } from './_metronic/layout/homepage/homepage.component';
import { CocktailsComponent } from './_metronic/layout/cocktails/cocktails.component';
import { InterComponent } from './_metronic/layout/inter/inter.component';
import { AppDefaultComponent } from './_metronic/layout/app-default/app-default.component';
import { MealCategoryComponent } from './_metronic/layout/meal-category/meal-category.component';
import { OurServicesComponent } from './_metronic/layout/our-services/our-services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CocktailsComponent,
    InterComponent,
    NonAlcoholicComponent,
    AppDefaultComponent,
    MealCategoryComponent,
    OurServicesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    SweetAlert2Module,
    NgxSpinnerModule.forRoot({ type: 'ball-beat' }),
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
