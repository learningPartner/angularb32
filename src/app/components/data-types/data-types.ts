import { Component } from '@angular/core';

@Component({
  selector: 'app-data-types',
  imports: [],
  templateUrl: './data-types.html',
  styleUrl: './data-types.css',
})
export class DataTypes {

  //string | undefined | number | array | booelan | date | null | Object | NaN
  //any
  //declartion  + Initialiazation
  courseName: string = "Angular b 32";
  courseDuration = "4 Months";
  //coourseCapacity; 


  rollNo: number = 123;
  productPrice = 1200.50;

  isActive: boolean = false;
  isPresent = true;

  currentDate: Date = new Date();
   
  student: any;

  employeeObject: any = {
    name: "Ram",
    contact:'11223344',
    email:'ram@gmail.com'
  }

  productObj = {
    name: "Mobile",
    price: 12000
  }

  cityList: string[] = ["Pune","Nagpur", "Mumabi"];
  rollNoList: number [] = [111,112,113,114,115];

  couserStartDate: string | undefined;
  cosureProject?: string;
  schoolObj : any | null;
  studnetName!: string;

  num1 = 12;
  num2 :any = "ABC";
  
  constructor() {
    debugger;
    this.schoolObj = "asdas";
    const result =  this.num1 - this.num2;
    debugger;
    console.log("Constru Executed");
    this.courseName = "123";
    this.isActive = true;
    this.cityList.push("Solpaur");
    console.log(this.cityList)
    console.log(this.employeeObject)
    console.log(this.employeeObject.contact)
    console.log(this.employeeObject['email'])

    this.student = "Rahul";
    this.student =  true;
    this.student = 3344;
    // this.coourseCapacity = "ABC";
    // this.coourseCapacity = 123;
    // this.coourseCapacity = true; 
    //this.couserStartDate = "Started from Niov";
    this.currentDate = new Date("12-12-2025");

    console.log(this.courseDuration)
    console.log(this.isActive)
  }











}
