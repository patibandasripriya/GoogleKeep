import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.scss']
})
export class DashboardComponentComponent implements OnInit {
  isDashboardRoute: boolean = false;
  isNotesRoute: boolean = false;
  noteslist: any;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isDashboardRoute = this.router.url === '/dashboard';
        this.isNotesRoute = this.router.url === '/dashboard/notes';
      }
    });
    // this.router.events.subscribe(() => {
    //   this.isDashboardRoute = this.router.url === '/dashboard';
    // });
  }
  onNoteAdded(note: any) {
    this.noteslist.push(note);
  }
}
