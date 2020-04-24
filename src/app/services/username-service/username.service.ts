import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  username: BehaviorSubject<string>

  constructor() {
    this.username = new BehaviorSubject<string>('')
  }

  setUsername(newName: string) {
    if (newName !== this.username.getValue()) {
      this.username.next(newName)
    }
  }

  getUsername(): Observable<string> {
    return this.username.asObservable()
  }
}
