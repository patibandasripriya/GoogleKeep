import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:string="https://fundoonotes.incubation.bridgelabz.com/api/";
  uurl:string="https://fundoonotes.incubation.bridgelabz.com/api/";
  constructor(private HttpClient:HttpClient) { }
  postApiCall(endpoint:string,data:any){
    return this.HttpClient.post(this.baseUrl+endpoint,data);
  }
  pApiCall(endpoint:string,data:any){
    return this.HttpClient.post(this.uurl+endpoint,data);
  }
  getApiCall(endpoint:string){
    return this.HttpClient.get(this.baseUrl+endpoint);
  }
  GetService(url:any){
    return this.HttpClient.get(this.baseUrl+url);
  }
}
