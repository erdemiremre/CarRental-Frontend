import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorComponent } from './components/color/color.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarCardComponent},
  {path:"cars", component:CarDetailComponent},
  {path:"cardetails/color/:colorId", component:CarDetailComponent},
  {path:"cars/getbycolor/:colorId", component:CarCardComponent},
  {path:"cars/getfilteredcars/:brandId/:colorId/:minDailyPrice/:maxDailyPrice", component:CarCardComponent},
  {path:"colors/add",component:ColorAddComponent, canActivate:[LoginGuard]},
  {path:"cars/getcardetailsbyid/:carId", component:CardetailsComponent},
  {path:"login", component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
