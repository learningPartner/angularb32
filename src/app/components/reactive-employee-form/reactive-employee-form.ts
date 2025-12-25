import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Utility } from '../../services/utility';

@Component({
  selector: 'app-reactive-employee-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-employee-form.html',
  styleUrl: './reactive-employee-form.css',
})
export class ReactiveEmployeeForm {

  http = inject(HttpClient);
  deptmentList = signal<any[]>([]);
  designationList = signal<any[]>([]);
  commanApiUrl: string = "https://api.freeprojectapi.com/api/EmployeeApp/";
  employeeList = signal<any[]>([]);
  currentEditEmployeeName = signal<string>('');

  utilitySr  =  inject(Utility);

  employeeForm: FormGroup = new FormGroup({
    employeeId: new FormControl(0),
    fullName: new FormControl("",[Validators.required,Validators.minLength(3)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    phone: new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]),
    gender: new FormControl(""),
    dateOfJoining: new FormControl(""),
    departmentId: new FormControl(""),
    designationId: new FormControl(""),
    employeeType: new FormControl(""),
    salary: new FormControl(0)
  })

  ngOnInit(): void {
    debugger;
    const appName= this.utilitySr.appName;
     setTimeout(() => {
      this.employeeForm.controls['fullName'].setValue("test")
    }, 3000);
    this.getAllEmployee()
    this.getDepartment()
  }


  getAllEmployee() {
    this.http.get(this.commanApiUrl + "GetEmployees").subscribe({
      next: (res: any) => {
        this.employeeList.set(res)
      }
    })
  }

  editEmployee(id: number) {
    debugger;
    this.http.get(`${this.commanApiUrl}${id}`).subscribe({
      next: (res: any) => {
        debugger;
        this.employeeForm = new FormGroup({
          employeeId: new FormControl(res.employeeId),
          fullName: new FormControl(res.fullName),
          email: new FormControl(res.email),
          phone: new FormControl(res.phone),
          gender: new FormControl(res.gender),
          dateOfJoining: new FormControl(res.dateOfJoining),
          departmentId: new FormControl(res.departmentId),
          designationId: new FormControl(res.designationId),
          employeeType: new FormControl(res.employeeType),
          salary: new FormControl(res.salary)
        });
        this.currentEditEmployeeName.set(res.fullName);
      }
    })
  }
  getDepartment() {
    this.http.get(`${this.commanApiUrl}GetDepartments`).subscribe({
      next: (res: any) => {
        debugger;
        this.deptmentList.set(res)
      }
    })
  }
  getDesignationByDeptId() {
    debugger;
    const deptId = this.employeeForm.controls['departmentId'].value;
    this.http.get(this.commanApiUrl + "GetDesignationsByDeptId?deptId=" + deptId).subscribe({
      next: (res: any) => {
        this.designationList.set(res)
      }
    })
  }


  onSaveEmp() {
    debugger;
    const formValue = this.employeeForm.value;

    this.http.post(this.commanApiUrl + "CreateEmployee", formValue).subscribe({
      next: (res: any) => {
        alert("Employee Created ")
      }
    })
  }
}
