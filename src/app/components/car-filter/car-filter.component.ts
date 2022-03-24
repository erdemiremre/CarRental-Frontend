import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {

  carFilterForm:FormGroup
  colors:Color[];
  brands:Brand[];
  dataLoaded=false;
  allFilterParamatersEntered:boolean=false;
  constructor(private formBuilder:FormBuilder,
    private colorService:ColorService,
    private brandService:BrandService,
    private router:Router,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.carFilterForm = this.formBuilder.group({
      brand: new FormControl(null, [
        Validators.required,
      ]),
      color: new FormControl(null, [
        Validators.required,
      ]),
      minimumDailyPrice: new FormControl(null, [
        Validators.required,
      ]),
      maximumDailyPrice: new FormControl(null, [
        Validators.required,
      ])
    });

    console.log("brand: " + this.carFilterForm.get('brand'));


  }

  filter(){
    if(this.checkFilterParameters()){
      let brandId=this.carFilterForm.value.brand;
      let colorId=this.carFilterForm.value.color;
      let minDailyPrice=this.carFilterForm.value.minimumDailyPrice;
      let maxDailyPrice=this.carFilterForm.value.maximumDailyPrice;

      this.router.navigateByUrl("cars/getfilteredcars/" + brandId + "/" + colorId + "/" + minDailyPrice + "/" + maxDailyPrice);
      this.carFilterForm.reset();
      this.allFilterParamatersEntered = false;
      this.dataLoaded=true;
    }
  }

  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data;
    })
  }

  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data;
    })
  }

  getBrand(){
    return this.carFilterForm.get('brand');
  }

  getColor(){
    return this.carFilterForm.get('color');
  }

  getMinimumDailyPrice(){
    return this.carFilterForm.get('minimumDailyPrice')
  }
  getMaximumDailyPrice(){
    return this.carFilterForm.get('maximumDailyPrice')
  }

  checkFilterParameters(){
    if(this.getBrand()?.valid && this.getColor()?.valid && this.getMinimumDailyPrice()?.valid && this.getMaximumDailyPrice()?.valid){
      this.allFilterParamatersEntered = true;
    }
    return this.allFilterParamatersEntered;
  }
}
