import { Component, OnInit,Input } from '@angular/core';
import { NotesService } from '../Services/notes.service';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {
  @Input() noteslist:any;
  isNotesRoute:boolean=false;
  constructor(private notesService:NotesService, private router:Router) { }
  ngOnInit(): void {
    this.notesService.getAllNotes('getNotesList').subscribe({
      next:(res:any)=>{
        console.log(res.data.data);
        this.noteslist=res.data.data;
      },
      error:(err: any) => console.log(err),
      complete:()=>{}
    })
  }
}