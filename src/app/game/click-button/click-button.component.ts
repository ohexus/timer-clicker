import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-click-button',
  templateUrl: './click-button.component.html',
  styleUrls: ['./click-button.component.scss']
})
export class ClickButtonComponent {
  @Input() isGameDelayed: boolean
  @Input() isGameFinished: boolean
  @Input() clicksSpeed: number

  circles: string[] = []

  runCircle() {
    this.circles.push('circle')
  }

  destroyCircles() {
    // wait for last circle animation end
    setTimeout(() => {
      this.circles = []
    }, 1250)
  }
}
