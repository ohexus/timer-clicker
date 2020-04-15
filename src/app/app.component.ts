import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = ''
  fullscreenHeader = true

  changeName(newName: string) {
    this.name = newName
    this.fullscreenHeader = false
  }
}
