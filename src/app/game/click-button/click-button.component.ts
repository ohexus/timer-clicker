import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-click-button',
  templateUrl: './click-button.component.html',
  styleUrls: ['./click-button.component.scss']
})
export class ClickButtonComponent {
  @Input() isGameDelayed: boolean
  @Input() isGameFinished: boolean

  circles: string[] = ['circle']

  runCircle() {
    this.circles.push('circle')
  }

  destroyCircles() {
    // wait for all circles animations ends
    setTimeout(() => {
      this.circles = []
    }, 2000)
  }
}
