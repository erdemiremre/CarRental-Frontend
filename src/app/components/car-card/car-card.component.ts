import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarCard } from 'src/app/models/carCard';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  carCards:CarCard[]=[];
  dataLoaded=false;
  currentCar:CarCard;
  filterText="";

  currentRoute: string = this.router.url;
  constructor(private router:Router,private toastrService:ToastrService,
    private cardetailService:CarDetailService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['brandId'] && params['colorId'] && params['colorId'] && params['minDailyPrice'] && params['maxDailyPrice']){
        this.getFilteredCarCards(params['brandId'], params['colorId'],params['minDailyPrice'],params['maxDailyPrice']);
        //onsole.log(this.carCards);

      }
      else{
        this.getCarCards();


      }
    })

  }

  getCarCards(){
    this.cardetailService.getCarCards().subscribe(response=>{
      this.carCards=response.data
      this.dataLoaded=true
      console.log(this.carCards);
    })
  }

  getFilteredCarCards(brandId:number, colorId:number, minDailyPrice:number, maxDailyPrice:number){
    this.cardetailService.getFilteredCars(brandId,colorId,minDailyPrice,maxDailyPrice).subscribe((response)=>{
      this.carCards=response.data;
      this.dataLoaded=true
    })
  }
}
