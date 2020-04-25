import { Component } from '@angular/core';
import { clickerTitle } from '../../consts/consts';
import { UsernameService } from 'src/app/services/username-service/username.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title: string = clickerTitle;

  username = '';

  isWarningShow = false;

  timerId: any;

  constructor(
    private router: Router,
    private usernameService: UsernameService
  ) {
    this.usernameService.getUsername().subscribe(username => this.username = username);
  }

  emitNewName(name: string) {
    this.usernameService.setUsername(name);
  }

  checkName() {
    const name = this.username.trim();

    if (name) {
      this.emitNewName(name);

      this.router.navigate(['/game']);
    } else {
      clearTimeout(this.timerId);

      this.isWarningShow = true;

      this.timerId = setTimeout(() => {
        this.isWarningShow = false;
      }, 3000);
    }
  }
}
