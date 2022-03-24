import { ResponseModel } from "./responseModel";

//tek bir datayı objeyi karşılamak için...
export interface SingleResponseModel<T> extends ResponseModel{
  data:T;
}
