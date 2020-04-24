import { Component, Input } from '@angular/core'
import { clickerTitle } from '../../consts/consts'
import { UsernameService } from 'src/app/services/username-service/username.service'
import { Location } from '@angular/common'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string
  username: string

  @Input() isGameScreen: boolean
  @Input() isMainScreen: boolean

  constructor(
    private usernameService: UsernameService,
    private router: Router
  ) {
    this.title = clickerTitle

    this.usernameService.getUsername().subscribe(username => this.username = username)
  }

  RouteLinkAction() {
    if (this.username !== '' && !this.isMainScreen) {
      this.router.navigate(['/game'])
    }
  }
}
