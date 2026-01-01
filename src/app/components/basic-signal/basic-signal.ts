import { Component, signal } from '@angular/core';
import { Admin } from "../admin/admin";

@Component({
  selector: 'app-basic-signal',
  imports: [Admin],
  templateUrl: './basic-signal.html',
  styleUrl: './basic-signal.css',
})
export class BasicSignal {


  pName: string = "Mobile";

  pPrice: number = 12500;

  productName = signal<string>("Laptop");

  productPrice = signal<number>(14500);

  studentObj =  signal<any>({name:'Chetan',city:'Pune'})

  cityList=  signal<string[]>(['Nagpur','Thane','Maumbai','Pune'])

  constructor() {
    setTimeout(() => {
      
      this.pName = "Camera"; 
    }, 5000);

    setTimeout(() => {
      this.productName.set("Laptop Ram 2 GB")
    }, 10000);

    const signalval = this.productName();
  }

  chnagePnAMe() {
    this.pName= "Mouse"
  }





}
