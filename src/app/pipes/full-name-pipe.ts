import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {

  transform(value: any): any {
    const fullName = value.name + "   " +  value.middleName + " " + value.surname;
    
    return fullName;
  }

}
