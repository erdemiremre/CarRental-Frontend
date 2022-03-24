import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarCard } from '../models/carCard';
@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl="https://localhost:44316/api/";
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<CarDetailResponseModel>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<CarDetailResponseModel>(newPath)

  }

  getCarCards():Observable<ListResponseModel<CarCard>>{
    let newPath = this.apiUrl + "cars/getcardetailswithimage";
    return this.httpClient.get<ListResponseModel<CarCard>>(newPath);
  }


  getCarDetailById(carId:number):Observable<ListResponseModel<CarCard>>{
    let newPath=this.apiUrl+"cars/getcardetailsbyid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarCard>>(newPath);
  }


  getCarDetailsByColor(colorId:number):Observable<CarDetailResponseModel>{
    let newPath = this.apiUrl + "cars/getbycolor?colorId="+colorId
    return this.httpClient.get<CarDetailResponseModel>(newPath);

  }

  getFilteredCars(brandId:number , colorId:number, minDailyPrice:number,maxDailyPrice:number):Observable<ListResponseModel<CarCard>>{
    let newPath = this.apiUrl + "cars/getfilteredcars?brandId="+brandId
    +"&colorId="+colorId
    +"&minDailyPrice="+minDailyPrice
    +"&maxDailyPrice="+maxDailyPrice;

    return this.httpClient.get<ListResponseModel<CarCard>>(newPath);
  }
}
