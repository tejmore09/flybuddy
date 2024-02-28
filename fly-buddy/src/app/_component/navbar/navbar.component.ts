import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // @ViewChild(LoginComponent) loginModal: LoginComponent;
  // isLoggedOut:boolean = true;
  // isLoggedIn:boolean = false;

  // constructor(private router:Router){}
  // logout(){

  // }
  // openLoginModal() {
  //   this.router.navigate(['/login']);     
  // }

  loggedInUser: any; // Replace 'any' with your user model

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loggedInUser = this.authService.getLoggedInUser();
  }
}
