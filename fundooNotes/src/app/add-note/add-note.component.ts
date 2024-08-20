    import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
    import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpService } from '../Services/http.service';
import { NotesService } from '../Services/notes.service';

    @Component({
      selector: 'app-add-note',
      templateUrl: './add-note.component.html',
      styleUrls: ['./add-note.component.scss']
    })
    export class AddNoteComponent implements OnInit {
      @Output() noteAdded:EventEmitter<any>=new EventEmitter<any>();

      notesform!:FormGroup;
      isExpanded:Boolean=false;

      constructor(private fb:FormBuilder,private http:HttpService,private notesService:NotesService) { }    
      ngOnInit(): void {
        this.notesform=this.fb.group({
          title:[''],
          note:[''],
          isPinned:[false],
          isReminded:[false],
          isArchived:[false]
        });
      }



      addNote=()=>{
        let notesdata=this.notesform.value;
        let formData={
          title:this.notesform.get('title')?.value,
          description:this.notesform.get('note')?.value,
          isPined:this.notesform.get('isPinned')?.value,
          isArchived:this.notesform.get('isArchived')?.value
        }
        this.notesService.addNotes('addNotes',formData).subscribe({
          next:(res:any)=>{
            console.log(res);
            window.location.reload();
          },
          error:(err: any) => console.log(err),
          complete:()=>{}
        })
      }

      submitNote=()=>{
        this.isExpanded=false;
        console.log(this.notesform.value);
        this.addNote();
    
      }
      expand=()=>{
        this.isExpanded=true;
      }
    }
