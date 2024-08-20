import { Component, OnInit,Input } from '@angular/core';
import { NotesService } from '../Services/notes.service';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
   @Input() ArchiveListNotes:any;
  constructor(private notesService:NotesService) { }

  ngOnInit(): void {
    this.notesService.getArchiveNotes('getArchiveNotesList').subscribe({
      next:(res:any)=>{
        console.log(res.data.data);
        this.ArchiveListNotes=res.data.data;
      },
      error:(err: any) => console.log(err),
      complete:()=>{}
    })
  }

}
