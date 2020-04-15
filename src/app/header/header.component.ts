import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'Timer Clicker Game'

  @Input() fullscreen: boolean
  @Output() newNameEvent = new EventEmitter()

  emitNewName(value: string) {
    this.newNameEvent.emit(value)
  }
}
