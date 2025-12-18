import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeFormData, MenuItems } from './Global.Constatnt';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularb32');

  ngifRouteName: string = "ng-if-ex";

  menuList: Menu[] = MenuItems;

  filtereMenu: Menu[] = [];

  // employeeForm: FormGroup =  new FormGroup({
  //   name:new FormControl(""),
  //   city: new FormControl(""),
  //   state: new FormControl("")
  // })
  employeeForm: FormGroup = new FormGroup({});

  formList: FromData[] = EmployeeFormData
  constructor() {
    const role = "Admin";
    this.filtereMenu = this.menuList.filter(m => m.roles.includes(role))
    // filter || find || icnludes || indexOf || lastIndex

    const fromData = EmployeeFormData;
    debugger;
    fromData.forEach(item => {
      const newControl = new FormControl();
      this.employeeForm.addControl(item.formControlName, newControl)
    })
    debugger;


  }
}

export interface Menu {
  route: string;
  roles: string[]
}


export interface FromData {
  formControlName: string;
  label: string,
  placeHolderText: string;
  inputType: string;
  className: string
}
