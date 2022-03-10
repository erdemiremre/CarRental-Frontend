import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';
import { Observable } from 'rxjs';
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
  getCarDetailsByColor(colorId:number):Observable<CarDetailResponseModel>{
    let newPath = this.apiUrl + "cars/getbycolor?colorId="+colorId
    return this.httpClient.get<CarDetailResponseModel>(newPath);

  }
}
