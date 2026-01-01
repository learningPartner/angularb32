import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-get-apiex',
  imports: [],
  templateUrl: './get-apiex.html',
  styleUrl: './get-apiex.css',
})
export class GetAPIEx {
  
  //HttpClient
  //http2 =  inject(HttpClient) //angular 16
  photosList = signal<any[]>([])

  userlist =signal<any[]>([]);

  vendorList = signal<any[]>([])

  clinetList =  signal<any[]>([])

  constructor(private http:HttpClient) {

  }

  getPhotosData() { 
    // setTimeout(() => {
    //   this.userlist = ["aaa","BBB"]
    // }, 2000);
    // this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe((result:any) => {
    //     this.photosList.set(result)
    // })

    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe((res:any)=>{

    },error=>{
        
    });

    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe({
      next:(res)=>{

      },
      error:(error)=>{

      } 
    })
  }

  getUsers() {
    
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((Res:any)=>{
      this.userlist.set(Res);
      
    })
  }

  getBusVendorS() {
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors").subscribe({
      next:(res:any)=>{
        this.vendorList.set(res);
      }
    })
  }

  getALlClients() {
    this.http.get("https://api.freeprojectapi.com/api/SmartParking/GetAllClients").subscribe({
      next:(res:any)=>{
        this.clinetList.set(res.data)
      }
    })
  }

}
