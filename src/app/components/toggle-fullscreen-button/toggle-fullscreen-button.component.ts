import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-fullscreen-button',
  templateUrl: './toggle-fullscreen-button.component.html',
  styleUrls: ['./toggle-fullscreen-button.component.scss']
})
export class ToggleFullscreenButtonComponent {
  @Input() buttonValue: string
  @Input() className: string
  @Input() isInitScreen: boolean

  fillHeaderStatus: boolean = false
  
  @Output() toggleFullscreenEvent = new EventEmitter()

  toggleFullscreenAction() {
    this.toggleFillHeaderStatus()
    this.toggleFullscreenEvent.emit()
  }

  toggleFillHeaderStatus() {
    this.fillHeaderStatus = !this.fillHeaderStatus
  }
}
