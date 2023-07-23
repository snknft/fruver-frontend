import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {
  transform(items: any[], filter: string): any[] {
    if (!items || !filter) {
      return items;
    }

    filter = filter.toLowerCase();
    return items.filter(item => item.nombre.toLowerCase().includes(filter));
  }
}
