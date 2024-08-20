import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Http } from 'winston/lib/winston/transports';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpservice:HttpService) { }
  loginAPICall(data:any){
    return this.httpservice.postApiCall('user/login',data);
  }
}
