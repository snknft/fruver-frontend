import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDetailProducts'
})
export class FilterCartProductsPipe implements PipeTransform {
  transform(items: any[], filter: string): any[] {
    if (!items || !filter) {
      return items;
    }

    filter = filter.toLowerCase();
    return items.filter(item => item.product.nombre.toLowerCase().includes(filter));
  }
}
