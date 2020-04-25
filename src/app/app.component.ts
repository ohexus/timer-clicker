import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsernameService } from './services/username-service/username.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private usernameService: UsernameService
  ) {
    this.usernameService.getUsername().subscribe(username => {
      if (username === '') {
        this.router.navigate(['/']);
      }
    });
  }
}
