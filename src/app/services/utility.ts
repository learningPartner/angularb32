import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Utility {

  appName: string = "Demo App"

  getSumIOf2Num(num1: number, num2: number  ) {
    debugger;
    return num1 +  num2;
  }

  getSumOf3Num(num1: number, num2: number, num3:number){
    return num1 +  num2 + num3;
  }

  getSum(...rest:number[]) {
     debugger;
    let sum = 0;
    for (let index = 0; index < rest.length; index++) {
       sum =  sum + rest[index]
    }
    return sum;
  }
  
  
}
