import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails:CarDetail[] =[];
  dataLoaded = false;
  filterText="";

  constructor(private carDetailService:CarDetailService, private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,private cartService:CartService) { }

  ngOnInit(): void {
    // this.getCarDetails();

    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getCarDetailsByColor(params["colorId"])
      }else{
        this.getCarDetails()
      }
    })

  }
  getCarDetails(){
   this.carDetailService.getCarDetails().subscribe(response=>{
     this.carDetails=response.data
     this.dataLoaded=true;
   })
  }
  getCarDetailsByColor(colorId:number){
    this.carDetailService.getCarDetailsByColor(colorId).subscribe(response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    })
   }

   addToCart(carDetail:CarDetail){
      this.toastrService.success("Sepete Ekledi",carDetail.brandName)
      this.cartService.addToCart(carDetail);
   }

}
