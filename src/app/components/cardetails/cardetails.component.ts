import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarCard } from 'src/app/models/carCard';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {

  carDetails:CarCard[]=[];
  dataLoaded=false;
  carImages:CarCard[]=[];

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private carDetailService:CarDetailService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarDetailsById(params["carId"]);
        console.log(this.carImages);

      }
    })
  }

  getCarDetailsById(carId:number){
    this.carDetailService.getCarDetailById(carId).subscribe((response)=>{
      this.carDetails=response.data;
      this.carImages=response.data.filter(c=>c.carId==carId);
    })
  }
}
