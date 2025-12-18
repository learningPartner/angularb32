import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  course = "";

  couserDuaration = "3 Months";

  public startDate = "21 Sta June"

  productName = "Mobile Moto A2";
  myPlaceholderText = "Enter Price";

  inputType : string = "date";

  dangeclassName = "bg-danger";

  isAcitve: boolean = true;
  selectedState: string = "pn";
  selectedGender : string = "";

  studentObj: any = {
    studName:'Rahul',
    mobile:'9988776655',
    email: 'rahul@gmail.com'
  }

  cityList: string []= ['pune',"Nagpur"]
  address: string = ""

  constructor( ) {
    const player = "Sachin";
    console.log(this.couserDuaration)
    setTimeout(() => {
      this.course = "";
      debugger;
    }, 5000);
  }

   showWelcome() {
    alert("welcome b-32")
    alert("End Alert")
  }

  changeCourse() {
    this.course = "Dot Net "
  }

  setCoureName(couseName:string) {
    this.course =  couseName;
  }

  onCityChnage() {
    alert("City FGot Chnaged")
  }

}
