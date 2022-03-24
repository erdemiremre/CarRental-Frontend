import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private apiUrl="https://localhost:44316/api";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"/brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  add(brand:Brand):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/Brands/add";
    return this.httpClient.post<ResponseModel>(newPath,brand)
  }

  getBrandById(brandId:number):Observable<SingleResponseModel<Brand>>{
    let newPath:string=this.apiUrl+"/Brands/getbrandbyid?brandId="+brandId;
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }

  update(brand:Brand):Observable<ResponseModel>{
    let newPath:string=this.apiUrl+"Brands/update";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }
}
