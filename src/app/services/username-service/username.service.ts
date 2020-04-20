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
    this.username.next(newName)
  }

  getUsername(): Observable<string>{
    return this.username.asObservable()
  }
}
