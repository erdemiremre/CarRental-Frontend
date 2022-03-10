import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorComponent } from './components/color/color.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarDetailComponent},
  {path:"cars", component:CarDetailComponent},
  {path:"cardetails/color/:colorId", component:CarDetailComponent},
  {path:"colors/add",component:ColorAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
