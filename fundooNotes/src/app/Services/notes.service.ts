import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private httpService:HttpService) { }
  baseurl:string="notes";
  access_token=localStorage.getItem("access_token")
  getAllNotes(url:any){
    return this.httpService.GetService(`${this.baseurl}/${url}?access_token=${this.access_token}`);
  }
  addNotes(url:any,data:any){
    return this.httpService.pApiCall(`${this.baseurl}/${url}?access_token=${this.access_token}`,data);
  }
  getTrashNotes(url:any){
    return this.httpService.GetService(`${this.baseurl}/${url}?access_token=${this.access_token}`);
  }
  getArchiveNotes(url:any){
    return this.httpService.GetService(`${this.baseurl}/${url}?access_token=${this.access_token}`);
  }
}
