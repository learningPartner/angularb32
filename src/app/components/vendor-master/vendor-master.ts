import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendor-master',
  imports: [FormsModule],
  templateUrl: './vendor-master.html',
  styleUrl: './vendor-master.css',
})
export class VendorMaster implements OnInit {

  http = inject(HttpClient);
  vendorList = signal<any[]>([]);

  newVendorObj: any = {
    vendorId: 0,
    vendorName: "",
    contactNo: "",
    emailId: ""
  };


  constructor() {
    debugger;
  }
  ngOnInit(): void {
    debugger;
    this.getAllVendors()
  }

  getAllVendors() {
    debugger;
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors").subscribe({
      next: (result: any) => {
        this.vendorList.set(result);
      }
    })
  }

  saveNewVendor() {
    const newObj = {}
    this.http.post("https://api.freeprojectapi.com/api/BusBooking/PostBusVendor", this.newVendorObj).subscribe({
      next: (res: any) => {
        debugger;
          alert("Vendor Created Sucess");
          this.getAllVendors()
      },
      error: (error: any) => {
        debugger;
        alert("API Error")
      }
    })
  }

  onEdit(data: any) {
    this.newVendorObj = data;
  }


  updateVendor() {
    this.http.put('https://api.freeprojectapi.com/api/BusBooking/PutBusVendors?id=' + this.newVendorObj.vendorId, this.newVendorObj).subscribe({
      next: (res: any) => {
        alert("Vendor Details Updated")
        this.getAllVendors()
      },error:(error)=>{
        alert(error.meesage)
      }
    })
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you Sure want to Delete");
    debugger;
    if (isDelete) {
      this.http.delete("https://api.freeprojectapi.com/api/BusBooking/DeleteBusVendor?id=" + id).subscribe({
        next: (result) => {
          alert("Vendor  Deleted")
          this.getAllVendors()
        }
      })
    } 

  }
}
