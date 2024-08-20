import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { PasswordPageComponent } from './password-page/password-page.component';
import { ConfirmpasswordComponent } from './confirmpassword/confirmpassword.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { AuthGuard } from './auth/auth.guard';
import { TrashComponent } from './trash/trash.component';
import { ArchiveComponent } from './archive/archive.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponentComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'notes', component: NotesContainerComponent },
      {path:'trash',component:TrashComponent},
    ]
  },
  //{path:'dashboard/trash',component:TrashComponent},
  {path:'dashboard/archive',component:ArchiveComponent},
  {path:'confirmpassword',component:ConfirmpasswordComponent},
  {path:'password',component:PasswordPageComponent},
  {path:'birthdetails',component:InfoComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:LoginComponent}, 
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
