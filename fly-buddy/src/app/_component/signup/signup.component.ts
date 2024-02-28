import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/_services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userDetails: any = {};

  constructor(private signupService: SignupService, private router: Router) {}

  signup(): void {
    this.signupService.signupUser(this.userDetails).subscribe(
      (response) => {
        // Handle successful signup, such as redirecting to login page
        this.router.navigate(['/login']);
      },
      (error) => {
        // Handle signup error
        console.error('Signup failed:', error);
      }
    );
  }

}
