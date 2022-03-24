import { Pipe, PipeTransform } from '@angular/core';
import { CarCard } from '../models/carCard';

@Pipe({
  name: 'filterCarCardsPipe'
})
export class FilterCarCardsPipePipe implements PipeTransform {

  transform(value: CarCard[], filterText:string): CarCard[] {
    return filterText ? value.filter((c: CarCard) => c.brandName.toLocaleLowerCase().includes(filterText) || c.colorName.toLocaleLowerCase().includes(filterText)  ) : value;
  }

}
