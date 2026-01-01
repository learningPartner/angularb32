import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-types',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe,JsonPipe, DatePipe, SlicePipe],
  templateUrl: './data-types.html',
  styleUrl: './data-types.css',
})
export class DataTypes {

  //string | undefined | number | array | booelan | date | null | Object | NaN
  //any
  //declartion  + Initialiazation
  courseName: string = "Angular b 32 from SCRATCH";
  courseDuration = "4 Months";
  //coourseCapacity; 


  rollNo: number = 123;
  productPrice = 1200.50;

  isActive: boolean = false;
  isPresent = true;

  currentDate: Date = new Date();

  student: any;

  employeeObject: any = {
    name: 'Rahul',
    empid: 22332,
    emailId: 'rahul@gmail.com',
    aadharCard: 232313123123,
    address: {
      city: 'Pune',
      state: 'MH',
      pincode: '221122',
      adddressLine1: 'Near SBI Bank',
      permanentAddress: {
        city: 'Mumbai',
        pincode: '2222',
        state: 'MH'
      }
    },
    contactNo: [
      "9988998800",
      "8877887788"
    ],
    isActive: true
  }

  productObj = {
    name: "Mobile",
    price: 12000
  }

  cityList: string[] = ["Pune", "Nagpur", "Mumabi"];
  rollNoList: number[] = [111, 112, 113, 114, 115, 444, 555, 666, 777, 888];

  couserStartDate: string | undefined;
  cosureProject?: string;
  schoolObj: any | null;
  studnetName!: string;

  num1 = 12;
  num2: any = "ABC";

  constructor() {
    
    this.schoolObj = "asdas";
    const result = this.num1 - this.num2;
    

    console.log("Constru Executed");
    this.isActive = true;
    this.cityList.push("Solpaur");
    console.log(this.cityList)
    console.log(this.employeeObject)
    console.log(this.employeeObject.contact)
    console.log(this.employeeObject['email'])

    this.student = "Rahul";
    this.student = true;
    this.student = 3344;
    // this.coourseCapacity = "ABC";
    // this.coourseCapacity = 123;
    // this.coourseCapacity = true; 
    //this.couserStartDate = "Started from Niov"; 

    console.log(this.courseDuration)
    console.log(this.isActive)
  }











}
