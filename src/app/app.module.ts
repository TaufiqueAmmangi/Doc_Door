import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutInfoComponent } from './about-info/about-info.component'; 
import { OurServicesComponent } from './our-services/our-services.component';  
import { DocServicestComponent } from './doc-servicest/doc-servicest.component';
import { OrthopedicComponent } from './doc-servicest/orthopedic/orthopedic.component';
import { LabTestComponent } from './doc-servicest/lab-test/lab-test.component';
import { DocConsultComponent } from './doc-servicest/doc-consult/doc-consult.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { GitComponent } from './doc-servicest/git/git.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AddNewComponent } from './components/add-new/add-new.component';
import { PdetailsComponent } from './components/pdetails/pdetails.component';
import { PlistComponent } from './components/plist/plist.component';
 
  
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    AboutInfoComponent, 
    OurServicesComponent,
    DocServicestComponent,
    OrthopedicComponent,
    LabTestComponent,
    DocConsultComponent,
    DemoComponentComponent,
    GitComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    RegisterComponent,
    AddNewComponent,
    PdetailsComponent,
    PlistComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent] 
})
export class AppModule { }
