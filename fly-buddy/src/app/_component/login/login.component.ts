import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/_services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isModalOpen = false;
  
  credentials: { username: string; password: string } = { username: '', password: '' };

  constructor(private loginService: LoginService, private router: Router) {}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.isModalOpen = true;
  }

  openModal() {
    // Set the variable to true to open the modal
    this.isModalOpen = true;
  }

  closeModal() {
    // Set the variable to false to close the modal
    this.isModalOpen = false;
    this.router.navigate(['/home']);
  }

  login(): void {
    this.loginService.loginUser(this.credentials).subscribe(
      (users) => {
        // Successful login, navigate to home or some other page
        this.router.navigate(['/home']);
      },
      (error) => {
        // Handle login error
        console.error('Login failed:', error);
      }
    );
  }

}
