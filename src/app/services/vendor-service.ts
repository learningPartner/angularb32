import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Alerts } from './alerts';

@Injectable({
  providedIn: 'root',
})

export class VendorService {
  

  http = inject(HttpClient);
  alertSrv =  inject(Alerts);
  
  apiUrl: string = "https://api.freeprojectapi.com/api/BusBooking/";

  getAllVendorsList() {
    
    return this.http.get(this.apiUrl + "GetBusVendors")
  }

  saveVendor(obj:any) {
    
    return this.http.post(this.apiUrl + "PostBusVendor", obj)
  }

  deleteVendorById(id: number) {
    
    return this.http.delete(this.apiUrl + "DeleteBusVendor?id=" +id)
  }
  
}
