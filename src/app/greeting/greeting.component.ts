import { Component, Input, OnInit } from '@angular/core';
import { UsernameService } from '../services/username-service/username.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  username: string = ''

  constructor(private usernameService: UsernameService) {}
  
  ngOnInit() {
    this.usernameService.getUsername().subscribe(username => this.username = username)
  }
}
