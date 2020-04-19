import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { DocServicestComponent } from './doc-servicest/doc-servicest.component';
import { OrthopedicComponent } from './doc-servicest/orthopedic/orthopedic.component';
import { LabTestComponent } from './doc-servicest/lab-test/lab-test.component';
import { DocConsultComponent } from './doc-servicest/doc-consult/doc-consult.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { GitComponent } from './doc-servicest/git/git.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component'; 
import { PlistComponent } from './components/plist/plist.component';
import { PdetailsComponent } from './components/pdetails/pdetails.component';
import { AddNewComponent } from './components/add-new/add-new.component';
 


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },     
   {path: 'login', component: LoginComponent},
  //  {path: 'singup', component: SignUpComponent},
  {path: 'register', component: RegisterComponent},
   { path: 'ourServices', component: OurServicesComponent,
    // children: [
    //   {
    //     path: 'nursing',
    //     component: NursingComponent
    //   },
    //   {
    //     path: 'labTest',
    //     component: LabTestComponent 
    //   }
    // ]
  },
  {path: 'docSer', component: DocServicestComponent},
  {path: 'ortho', component: OrthopedicComponent},
  {path:'labTest', component: LabTestComponent},
  {path: 'docCon', component: DocConsultComponent},
  {path: 'dc', component: DemoComponentComponent},
  {path: 'git', component: GitComponent},
  // New
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
// New Details- - - - 
{ path: 'pp', component: PlistComponent },
  { path: 'pdetails/:id', component: PdetailsComponent },
  { path: 'add', component: AddNewComponent }

   
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
