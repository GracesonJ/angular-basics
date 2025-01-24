import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append',
  standalone: true
})
export class AppendPipe implements PipeTransform {

  transform(dataTobeTransfered:string, appendText: string): string {
    return dataTobeTransfered+" "+appendText;
  }

}
