import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(productData: any[], term: string): any[] {
    return productData.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
