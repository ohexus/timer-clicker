import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-button-link',
  templateUrl: './header-button-link.component.html',
  styleUrls: ['./header-button-link.component.scss']
})
export class HeaderButtonLinkComponent {
  @Input() buttonValue: string
  @Input() routeLink: string
  @Input() isAbsoluteLeft: boolean
  @Input() isAbsoluteRight: boolean
  @Input() disabled: boolean

  constructor(private router: Router) { }

  buttonAction() {
    this.router.navigate([this.routeLink])
  }
}
