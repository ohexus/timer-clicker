import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'Timer Clicker Game'
  isWarningShow: boolean = false

  @Input() fullscreen: boolean
  @Output() newNameEvent = new EventEmitter()

  emitNewName(value: string) {
    this.newNameEvent.emit(value)
  }

  checkName(value: string) {
    const name = value.trim()

    if (name) {
      this.newNameEvent.emit(name)
    } else {
      this.isWarningShow = true

      setTimeout(() => {
        this.isWarningShow = false
      }, 3000)
    }
  }
}
