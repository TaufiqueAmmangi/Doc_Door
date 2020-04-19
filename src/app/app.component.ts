import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;


  showHead: boolean = false;
  showGit: boolean = false;
  showReg: boolean = false;
  showDocSer: boolean = false;
  showDemoComp: boolean = false;
  title = 'Doc-Door';
  showOrtho: boolean = false;
  showLabTest: boolean = false;
  showDocCon: boolean = false;
  constructor(private tokenStorageService: TokenStorageService, private router: Router ) {

    //  Hide Show Components - - - - - - - -  
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url'] == '/ourServices' || event['url'] == '/docSer' || event['url'] == '/ortho' || event['url'] == '/labTest' || event['url'] == '/docCon' || event['url'] == '/dc' || event['url'] == '/git' || event['url'] == '/register' || event['url'] == '/pp' || event['url'] == '/profile' || event['url'] == '/add' || event['url'] == '/pdetails/') {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
        if (event['url'] == '/login' || event['url'] == '/singup' || event['url'] == '/' || event['url'] == '/register') {
          this.showDocSer = false;
        } else {
          this.showDocSer = true;
        }

        if (event['url'] == '/login' || event['url'] == '/singup' || event['url'] == '/' || event['url'] == '/register') {
          this.showOrtho = false;
        } else {
          this.showOrtho = true;
        }

        if (event['url'] == '/login' || event['url'] == '/singup' || event['url'] == '/' || event['url'] == '/register') {
          this.showLabTest = false;
        } else {
          this.showLabTest = true;
        }

        if (event['url'] == '/login' || event['url'] == '/singup' || event['url'] == '/' || event['url'] == '/register') {
          this.showDocCon = false;
        } else {
          this.showDocCon = true;
        }

      }
    });
    // - - - - - - - - - - - - 
  }

  ngOnInit() {
     
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }


}
