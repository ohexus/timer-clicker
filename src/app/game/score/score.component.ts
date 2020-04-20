import { Component, Input, OnInit } from '@angular/core';
import { UsernameService } from 'src/app/services/username-service/username.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  @Input() total: number
  @Input() average: number

  username: string = ''
  
  constructor(private usernameService: UsernameService) {}
  
  ngOnInit() {
    this.usernameService.getUsername().subscribe(username => this.username = username)
  }
}
