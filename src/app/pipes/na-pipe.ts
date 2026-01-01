import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'napipe',
  pure: true
})
export class NaPipe implements PipeTransform {

  transform(value: any,textToDisplay: string): any {
    console.log("NA Exe")
    if(value != null && value != undefined && value != '') {
      return value;
    } else {
      return textToDisplay;
    } 
  }

}
